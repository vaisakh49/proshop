import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Message from "../components/Message"
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux"
import { listProducts } from "../actions/productAction"

const HomeScreen = (props) => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productlist)
  const { products, loading, error } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Product</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={5} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

// HomeScreen.propTypes = {};

export default HomeScreen
