import React from 'react';
import withStyles from '../../../tools/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© MS/1 Design</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">
            Home
          </Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/cart">
            Cart
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
