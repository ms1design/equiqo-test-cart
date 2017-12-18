import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartItem from '../../components/CartItem/CartItem';
import { checkout } from '../../actions/cart';
import withStyles from '../../../tools/lib/withStyles';
import s from './CartContainer.css';

class CartContainer extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
    checkout: PropTypes.func.isRequired,
  };

  render() {
    const { items } = this.props;
    const children = items.map(i => <CartItem key={i.product} data={i} />);

    return (
      <div>
        <div className={s.list}>{children}</div>
        <button className={s.checkout} onClick={this.props.checkout}>
          Checkout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.cart });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ checkout }, dispatch);

export default withStyles(s)(
  connect(mapStateToProps, mapDispatchToProps)(CartContainer),
);
