import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCart } from '../zustand/useCart';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({productInfo}) {

  const addToCart = useCart((state) => state.addToCart)
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={productInfo.image}
        title={productInfo.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productInfo.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {productInfo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={() => addToCart(productInfo)} className='bg-amber-400 text-black p-1 hover:cursor-pointer' size="small">Add to Cart</button>
        <Button onClick={() => navigate(`/Product/${productInfo.id}`, {state: productInfo})}>View Product</Button>
      </CardActions>
    </Card>
  );
}
