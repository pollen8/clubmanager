import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import auth from '../Auth/Auth';
import loading from './loading.svg';

class Callback extends Component<any> {

  async componentDidMount() {
    try {
      await auth.handleAuthentication();
    } catch (e) {
      window.alert('counld not login');
      console.log(e);
    } finally {
      this.props.history.replace('/');
    }
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