import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '../../../tools/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
      }),
    ).isRequired,
    // items: PropTypes.number.isRequired,
  };

  render() {
    const { items } = this.props;
    console.info(items);
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/">
          Home
        </Link>
        <Link className={s.link} to="/cart">
          Cart
          {items.length > -1 ? (
            <span className={s.counter}>{items.length}</span>
          ) : null}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.info(state);
  return { items: state.cart };
};

export default withStyles(s)(connect(mapStateToProps, null)(Navigation));
