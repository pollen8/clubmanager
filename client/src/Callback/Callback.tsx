import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import auth from '../Auth/Auth';
import loading from './loading.svg';

class Callback extends Component<any> {

  async componentDidMount() {
    await auth.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    const style: React.CSSProperties = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default withRouter(Callback);