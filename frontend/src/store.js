import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer"

const reducer = combineReducers({
  productlist: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middileware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middileware))
)

export default store
