import { COMPANY_LOGIN, NEW_CUSTOMER, CUSTOMER_ORDERS } from './types';
import axios from 'axios';
import $ from 'jquery'

export const loginToggle = () => dispatch => {
    dispatch({
        type: SIGN_IN
    });
};
export const loginUser = info => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: info
    });
};

export const newCustomer = userInfo => dispatch => {
    axios.post('http://localhost:5000/api/users',
    {
        username: userInfo.username,
        password: userInfo.password,
        emailAddress: userInfo.emailAddress
    })
    .then(res => {
        const allUserInfo = {
            token: res.headers['x-auth-token'],
            ...res.data
        }
        dispatch({
            type: NEW_CUSTOMER,
            payload: allUserInfo
        });
    })
    .catch(err => {
        console.log(err)
    })
};


export const companyLogin = userInfo => dispatch => {
    axios.post('http://localhost:9000/login',
    {
        emails: userInfo.email,
        password: userInfo.password
    })
    .then(res => {
        $('#invalid').css('display', 'none');
        console.log(res.data);
        localStorage.setItem("JWT", res.data);
        const JsonWT = localStorage.getItem("JWT");
        const tokenHeader = { headers: {
            'x-auth-token': JsonWT

          }}
          axios.get('http://localhost:9000/customer/data', tokenHeader)
        //   .then(res => {
        //       dispatch({
        //           type: GET_SQUAWK_USER,
        //           payload: res.data,
        //       })
        //     })
            .then(
                dispatch({
                    type: SIGN_IN
                }))

    })
    .catch(err => {
        $('#invalid').css('display', 'initial');
        console.log(err)
    })
};

export const customerOrders = () => dispatch => {
    axios.get('http://localhost:9000/customerOrders',{
            company: customers.company,
            orders: customers.orders
        })
        .then(customers => dispatch({
            type: CUSTOMER_ORDERS,
            payload: customers.data
    }));
}

