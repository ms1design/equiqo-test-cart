import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Home.scss';

class Home extends React.Component {
  static propTypes = {
    products: PropTypes.shape({
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { products } = this.props;
    return (
      <div className={s.root}>
        <ul>{products.map(p => <li key={p.product}>{p.product}</li>)}</ul>
      </div>
    );
  }
}

export default withStyles(s)(Home);
