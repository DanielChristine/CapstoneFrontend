
import { FETCH_CUSTOMERS, CUSTOMER_ORDERS } from './types';
import axios from 'axios';

export const customerActions = {
    login,
    logout,
    register,
};

export const fetchCustomers = (customers) => dispatch => {
    axios.get('http://localhost:9000/customerOrders')
        .then(customers => dispatch({
            type: FETCH_CUSTOMERS,
           
    }));
}