import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from '../../../tools/lib/withStyles';
import s from './Cart.css';

class Cart extends React.Component {
  // static propTypes = {
  // };

  render() {
    return (
      <div className={s.root}>
        <h1>CART</h1>
      </div>
    );
  }
}

export default withStyles(s)(Cart);
