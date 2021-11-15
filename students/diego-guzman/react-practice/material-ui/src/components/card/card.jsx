import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import './style.css'





export default function MyCard({link, url, name, text}) {
    return (
                
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="340"
                                image={url}
                                alt="character_card"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button variant="text" target='blank' href={link}>know more</Button>
                    </Card>
               
    );
}

