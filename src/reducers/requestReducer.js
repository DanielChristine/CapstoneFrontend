import {
    FETCH_CUSTOMERS,
    NEW_CUSTOMER,
    CUSTOMER_ORDERS,
  } from "../actions/types";
  
  const initialState = {
    customer: [],
  };
  const requestReducer = (state = initialState, action) => {
    switch (action.type) {

      case CUSTOMER_ORDERS:
        return {
          ...state,
          customer: action.payload,
        };
      default:
        return state;
    }
  };
  export default requestReducer;
  