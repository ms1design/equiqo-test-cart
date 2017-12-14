import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import withStyles from 'isomorphic-style-loader-fork/lib/withStyles';
import s from './Product.css';

class Product extends React.Component {
  // static propTypes = {
  // };

  render() {
    return (
      <div className={s.root}>
        <h1>PRODUCT</h1>
      </div>
    );
  }
}

export default withStyles(s)(Product);
