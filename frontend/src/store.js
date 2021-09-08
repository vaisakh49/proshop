import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer"

const reducer = combineReducers({
  productlist: productListReducer,
  productDetails: productDetailsReducer,
})

const initialState = {}

const middileware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middileware))
)

export default store
