import BasicButtons from "./boton"
import Stack from '@mui/material/Stack';


export default function ListCard() {


  return (
    <Stack spacing={2} direction="row">
      <BasicButtons name='boton1' variant="outlined" tamano='small' href='https://es.wikipedia.org/wiki/Mart%C3%ADn'></BasicButtons>
      <BasicButtons name='boton2' variant="text" tamano='small' href='https://es.wikipedia.org/wiki/Juan'></BasicButtons>
      <BasicButtons name='boton3' variant="contained" tamano='small' href='https://es.wikipedia.org/wiki/Mar%C3%ADa'></BasicButtons>
      <BasicButtons name='boton4' variant="contained" tamano='large' ></BasicButtons>
    </Stack>
  )
}