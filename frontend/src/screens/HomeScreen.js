import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

import { Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';

const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProduct();
  }, []);

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={5} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

// HomeScreen.propTypes = {};

export default HomeScreen;
