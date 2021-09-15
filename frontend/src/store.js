import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { userLoginReducer } from "./reducers/userReducer"
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer"

const reducer = combineReducers({
  userLogin: userLoginReducer,
  productlist: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middileware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middileware))
)

export default store
