import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#98c5e9',
          boxShadow: 'none',
          padding: '10px 0',
          border: '2px solid #00285e'
        }}
      >
        <Toolbar style={{ display: 'flex' }} />
      </AppBar>
    );
  }
}

export default Header;
