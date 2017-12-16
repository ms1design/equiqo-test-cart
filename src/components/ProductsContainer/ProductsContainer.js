import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../tools/lib/withStyles';
import s from './ProductsContainer.css';

class ProductsContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <section className={s.productsContainer}>{this.props.children}</section>
    );
  }
}

export default withStyles(s)(ProductsContainer);
