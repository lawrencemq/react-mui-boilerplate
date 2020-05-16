import React from 'react';
import logo from './logo.svg';

import { makeStyles, Typography, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.root}>
        <img src={logo} alt="logo" />
        <Typography variant="body1" align="center">
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
      </Paper>
    </Container>
  );
};

export default App;
