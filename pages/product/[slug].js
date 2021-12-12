import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import NextLink from 'next/link';
import Image from 'next/image';
import Link from '@mui/material/Link';
import { Button, Card, Grid, List, ListItem, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

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
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={540}
            height={540}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography variant="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} star ({product.numReviews} reviews){' '}
                <Rating
                  name="read-only"
                  value={product.rating}
                  readOnly
                  precision={0.5}
                />
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> ₹ {product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {' '}
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
