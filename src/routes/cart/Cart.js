import React from 'react';
import PropTypes from 'prop-types';
import CartContainer from '../../components/CartContainer/CartContainer';
import withStyles from '../../../tools/lib/withStyles';
import s from './Cart.css';

class Cart extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <CartContainer items={this.props.items} />
      </div>
    );
  }
}

export default withStyles(s)(Cart);
