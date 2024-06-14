// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Augur Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
