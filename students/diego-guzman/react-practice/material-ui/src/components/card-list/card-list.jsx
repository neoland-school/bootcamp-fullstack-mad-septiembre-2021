import MyCard from "../card/card"
import Grid from '@mui/material/Grid';

function CardList() {

    return (
        <Grid container className='card__container' spacing={2}>
            <Grid item xs={6} md={4}>
                <MyCard link='https://rickandmorty.fandom.com/wiki/Rick_Sanchez'
                    url='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                    name='Rick Sanchez' text='Rick Sanchez is a character from Rick and Morty series' ></MyCard>
            </Grid>
            <Grid item xs={6} md={4}>
                <MyCard link='https://rickandmorty.fandom.com/wiki/Morty_Smith'
                    url='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
                    name='Morty Smith' text='Morty Smith is a character from Rick and Morty series' ></MyCard>
            </Grid>
            <Grid item xs={6} md={4}>
                <MyCard link='https://rickandmorty.fandom.com/wiki/Teacher_Rick'
                    url='https://rickandmortyapi.com/api/character/avatar/345.jpeg'
                    name='Teacher Rick' text='Teacher Rick is a character from Rick and Morty series' ></MyCard>
            </Grid>
        </Grid>
    )
}

export default CardList