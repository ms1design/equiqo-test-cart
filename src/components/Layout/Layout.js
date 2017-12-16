import React from 'react';
import PropTypes from 'prop-types';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';

import withStyles from '../../../tools/lib/withStyles';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.flexContainer}>
        <Header />
        <section className={s.flexible}>{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
