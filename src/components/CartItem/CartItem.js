import React from 'react';
import PropTypes from 'prop-types';
import ellipsis from 'text-ellipsis';
import withStyles from '../../../tools/lib/withStyles';
import s from './CartItem.css';

class CartItem extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidEnter() {
    console.info(this, 'componentDidEnter');
  }

  componentWillLeave(callback) {
    console.info(this, 'componentWillLeave');
  }

  render() {
    const { data } = this.props;
    return (
      <div className={s.item}>
        <img
          src={`products/${data.product}.jpeg`}
          alt={data.produc}
          className={s.thumbnail}
        />
        <span className={s.name}>{data.product}</span>
        <span className={s.desc}>{ellipsis(data.description, 200)}</span>
        <span className={s.price}>{data.price}</span>
      </div>
    );
  }
}

export default withStyles(s)(CartItem);
