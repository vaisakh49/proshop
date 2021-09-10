import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartAction"
import { Row, Col, ListGroup, Form, Image, Button, Card } from "react-bootstrap"
import Message from "../components/Message"
// import PropTypes from "prop-types"

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split("=")[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  useEffect(() => {
    dispatch(addToCart(productId, qty))
  }, [dispatch, productId, qty])
  return (
    <div>
      <h2>cart</h2>
    </div>
  )
}

// CartScreen.propTypes = {}

export default CartScreen
