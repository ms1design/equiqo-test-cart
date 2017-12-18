import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../tools/lib/withStyles';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <ProductsContainer {...this.props} />
      </div>
    );
  }
}

export default withStyles(s)(Home);
