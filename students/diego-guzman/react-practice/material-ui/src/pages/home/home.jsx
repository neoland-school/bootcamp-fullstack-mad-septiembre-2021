
import CardList from '../../components/card-list/card-list';
import ModalButtonList from '../../components/modal-buttons-list/modal-buttons-list'
import { Grid } from '@mui/material';
import AddCartButton from '../../components/add-cart-button/add-cart-button'


function HomePage() {

    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CardList></CardList>
            </Grid>
            <Grid item xs={12}>
                <AddCartButton></AddCartButton>
            </Grid>
            <Grid item xs={12}>
                <ModalButtonList></ModalButtonList>
            </Grid>
        </Grid>
    )
}

export default HomePage