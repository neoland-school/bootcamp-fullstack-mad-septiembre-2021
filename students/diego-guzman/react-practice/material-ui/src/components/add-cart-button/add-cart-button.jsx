import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ShoppingCart } from '../global-context/shopping-cart';
import { useContext } from 'react';

export default function AddCartButton() {


  const [items, setItems] = useContext(ShoppingCart)

  const handleAdd = ()=>{
    let counter = items + 1;
    setItems(counter)
  }

  return (
    <Stack className='add-button__container' direction="row" spacing={2} justifyContent='center' sx={{ margin: 2 }}>
        <Button onClick={handleAdd} variant="contained">Add to Cart</Button>
    </Stack>

  );
}