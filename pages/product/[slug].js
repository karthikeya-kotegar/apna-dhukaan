import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  //   get the slug from router path.
  const { slug } = router.query;

  //   return the product in slug
  const product = data.products.find((ele) => ele.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className={classes.alert}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Something went wrong! <strong>no product found :(</strong>
          </Alert>
        </div>
      </Layout>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
