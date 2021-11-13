// 2.- Añadir un componente AppBar que se componga de:
//         Un menu con 3 opciones (Register, Login, About) que no redirigirán aun a ningun sitio
//         3 Badges que muestren 2 iconos de vuestra elección que no sean los que vienen por defecto y un carrito de la compra.
import './style.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState} from 'react';
import { CarritoCounter } from "../../global-context/carrito-counter";



export default function Header() {

    const [carrito] = useContext(CarritoCounter);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton> */}
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color='inherit'
                        >
                            Menú
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Register</MenuItem>
                            <Link to='/login'>
                                <MenuItem onClick={handleClose}>Imagenes</MenuItem>
                            </Link>
                            <Link to='/about'>
                                <MenuItem onClick={handleClose}>About</MenuItem>
                            </Link>
                            
                        </Menu>
                        <Stack spacing={2} direction="row">
                            <Badge color="secondary">
                                <MailIcon color="white" />
                            </Badge>
                            <Badge color="success">
                                <MailIcon color="white" />
                            </Badge>
                            <Badge badgeContent={carrito} color="success">
                                <ShoppingCartIcon color='white'/>
                            </Badge>
                        
                        </Stack>

                    </Toolbar>
                </AppBar>
            </Box>

            <div>

            </div>
        </div>

    );
}