import './style.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Toolbar } from '@mui/material';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Stack } from '@mui/material';
import { ShoppingCart } from '../global-context/shopping-cart';
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function MyAppBar() {

    let [items] = useContext(ShoppingCart)

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Menu
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            Registration
                        </MenuItem>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose} disableRipple>
                            Home
                        </MenuItem>
                        </Link>
                        <Link to='/about' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose} disableRipple >
                            About
                        </MenuItem>
                        </Link>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                            Login
                        </MenuItem>

                    </StyledMenu>
                    <Stack direction="row" className='icons__container' >
                        <CastOutlinedIcon />
                        <Badge badgeContent={items} color="secondary">
                        <ShoppingCartIcon></ShoppingCartIcon>
                        </Badge>
                    <AccountCircleOutlinedIcon />
                </Stack>
            </Toolbar>
        </AppBar>
        </Box >
    );
}





