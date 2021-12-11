import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Apna Dukaan</title>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography>Apna Dukaan</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All Rights Reserved &copy;Apna Dukaan</Typography>
      </footer>
    </div>
  );
}
