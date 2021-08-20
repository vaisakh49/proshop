import React from 'react';
import products from '../products';
import Product from '../components/Product';

import { Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';

const HomeScreen = (props) => {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={5} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

// HomeScreen.propTypes = {};

export default HomeScreen;
