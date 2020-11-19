import { combineReducers } from 'redux';
import customerReducer from  './customerReducer';
import requestsReducer from './requestReducer';



export default combineReducers({
    customer: customerReducer,
    requests: requestsReducer
})