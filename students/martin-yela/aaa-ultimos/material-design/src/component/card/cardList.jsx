// 3.- Debajo del header debemos crear 3 Cards que muestre 3 personajes de algún api que os guste o introducidos a mano. Cada card tendrá un botón de acción que redirigirá a alguna página de internet relacionada con su contenido.
import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardList({ name, edad, sexo, url }) {

    
    const card = (
        <Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {edad}
                </Typography>
                <Typography variant="body2">
                    {sexo}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <a href={url}>
                    <Button size="small">Learn More</Button>
                </a>
            </CardActions>
        </Fragment>
    );


    return (
        <Box sx={{ maxWidth: 150 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
