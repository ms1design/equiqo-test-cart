import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

class Home extends React.Component {
  // static propTypes = {
  // };

  render() {
    return (
      <div className={s.root}>
        <h1>HOME</h1>
      </div>
    );
  }
}

export default withStyles(s)(Home);
