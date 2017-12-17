import React from 'react';
import PropTypes from 'prop-types';
import ellipsis from 'text-ellipsis';
import withStyles from '../../../tools/lib/withStyles';
import s from './Product.css';

class Product extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    onBuy: PropTypes.func.isRequired,
  };

  render() {
    const { data, onBuy } = this.props;
    const desc = ellipsis(data.description, 100);
    return (
      <div className={s.product}>
        <div
          className={s.thumbnail}
          style={{ backgroundImage: `url("/products/${data.product}.jpeg")` }}
        >
          <h2>{data.product}</h2>
        </div>
        <p>{desc}</p>
        <div className={s.footer}>
          <span className={s.price}>{data.price}</span>
          <button
            className={s.buyButton}
            onClick={e => {
              e.preventDefault();
              onBuy(data);
            }}
          >
            Buy
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Product);
