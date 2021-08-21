import React from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';
// import PropTypes from 'prop-types'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='strong'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} Review`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Product.propTypes = {};

export default Product;
