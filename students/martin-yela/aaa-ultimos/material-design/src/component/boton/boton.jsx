import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CarritoCounter } from '../../global-context/carrito-counter';

export default function BasicButtons({name, variant, tamano, href}) {
  let [carrito, setCarrito] = useContext(CarritoCounter);
  
  const handleClick = () =>{
    const contador = carrito + 1;
    setCarrito(contador)
  }
  
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} size={tamano} target='blank' href={href} onClick={handleClick}>{name} </Button>
    </Stack>
  );
}