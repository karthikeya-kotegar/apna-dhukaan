import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout';
import Grid from '@mui/material/Grid';
import data from '../utils/data';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1>Products</h1>

      <Grid container spacing={3}>
        {data.products.map((product) => {
          return (
            <Grid item md={4} key={product.name}>
              <Card sx={{ maxWidth: 345 }}>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.image}
                      alt={product.name}
                    />
                  </CardActionArea>
                </NextLink>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹ {product.price}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    <AddShoppingCartIcon /> Add to cart
                  </Button>
                  <Box sx={{ ml: 'auto' }}>
                    <Button>
                      <FavoriteIcon sx={{ color: pink[500] }} />
                    </Button>
                    {/* <Fab aria-label="like">
                      <FavoriteIcon sx={{ color: pink[500] }} />
                    </Fab> */}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

// <Grid container spacing={3}>
//           {data.products.map((product) => {
//             <Grid item md={4} key={product.name}>
//               <Card>
//                 {/* <CardActionArea> */}
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={product.image}
//                   alt={product.title}
//                 ></CardMedia>
//                 <CardContent>
//                   <Typography>{product.name}</Typography>
//                 </CardContent>
//                 {/* </CardActionArea> */}
//                 <CardActions>
//                   <Typography>₹ {product.price}</Typography>
//                 </CardActions>
//                 <Button size="small" color="primary">
//                   Add to Cart
//                 </Button>
//               </Card>
//             </Grid>;
//           })}
//         </Grid>
