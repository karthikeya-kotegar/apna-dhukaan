import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Apna Dukaan</title>
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Apna Dukaan</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Rights Reserved &copy;Apna Dukaan</Typography>
      </footer>
    </div>
  );
}
