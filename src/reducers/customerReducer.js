import { FETCH_CUSTOMERS, NEW_CUSTOMER, CUSTOMER_ORDERS } from "./actions/types";

const initialState = {payload: customers.data};
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CUSTOMER:
      return {
        ...state,
        info: action.payload
      }

    case FETCH_CUSTOMERS:
      return {
        ...state,
        info: action.payload,
      }
    default:
      return state;

    case CUSTOMER_ORDERS:
      return {
        ...state,
        customer: action.payload,
      }
    default:
      return state;
  }
}
export default customerReducer;
