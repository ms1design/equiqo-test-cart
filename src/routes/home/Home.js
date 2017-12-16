import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../tools/lib/withStyles';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import Product from '../../components/Product/Product';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  render() {
    const { products } = this.props;
    return (
      <div className={s.root}>
        <ProductsContainer>
          {products && products.map(p => <Product key={p.product} data={p} />)}
        </ProductsContainer>
      </div>
    );
  }
}

export default withStyles(s)(Home);
