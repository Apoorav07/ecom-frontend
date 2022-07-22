import { combineReducers } from "redux";
import authreducer from  './authreducer'
import loaderreducer from  './loaderreducer'
import products from "./products";
import categoryreducer from "./categoryreducer";

export default combineReducers({
  authreducer , loaderreducer , products,categoryreducer
})