import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import { addProductToCart } from '../../actions/cart';
import withStyles from '../../../tools/lib/withStyles';
import s from './ProductsContainer.css';

class ProductsContainer extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  handleBuy = data => {
    this.context.store.dispatch(
      addProductToCart({
        value: data,
      }),
    );
    return false;
  };

  render() {
    const { products } = this.props;
    return (
      <section className={s.productsContainer}>
        {products &&
          products.map(p => (
            <Product
              key={p.product}
              data={p}
              onBuy={this.handleBuy.bind(this)}
            />
          ))}
      </section>
    );
  }
}

export default withStyles(s)(
  connect(null, { addProductToCart })(ProductsContainer),
);
