import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTransitionGroup from 'react-addons-transition-group';
import CartItem from '../../components/CartItem/CartItem';
import { checkout } from '../../actions/cart';
import withStyles from '../../../tools/lib/withStyles';
import s from './CartContainer.css';

class CartContainer extends React.Component {
  static propTypes = {
    items: PropTypes.objectOf(
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

  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  handleCheckout = () => {
    this.context.store.dispatch(checkout());
    this.setState({
      items: {},
    });
  };

  render() {
    const items = Object.keys(this.state.items).map(i => (
      <CartItem key={i} data={this.state.items[i]} />
    ));

    return (
      <div>
        <div className={s.list}>
          <ReactTransitionGroup component="div">{items}</ReactTransitionGroup>
        </div>
        <button className={s.checkout} onClick={this.handleCheckout}>
          Checkout
        </button>
      </div>
    );
  }
}

export default withStyles(s)(connect(null, { checkout })(CartContainer));
