import axios from 'axios';
import $ from 'jquery';


export const fetchCustomers = () => dispatch => {
    axios.get('http://localhost:9000/customers')
        .then(customers => dispatch({
            type: FETCH_CUSTOMERS,
            payload: customers.data
    }));
}

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