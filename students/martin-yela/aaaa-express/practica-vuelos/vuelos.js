import * as fs from 'fs/promises'
import express from 'express';


const app = express();
app.use(express.json());
const vuelos = [];

async function traerVuelos() {
    const vuelos = await fs.readFile('vuelos.json', {encoding: 'utf-8'});
    return JSON.parse(vuelos);

}

async function devolverVuelo(res) {
    try {
        let arr = await traerVuelos();
        
        let arrImprimir='';
        arr.forEach(element => {
            arrImprimir += '################################\n ID: ' + element.id + '\n' +'Origen: ' + element.origin + '\n' + 'Destination: ' + element.destination +'\n' + 'outbounDate: ' + element.outboundDate +'\n' + 'inboundDate: ' + element.inboundDate +'\n';
        });
        res.send(arrImprimir);
        
       
    } catch (error) {
        console.error(error);
    }
}

async function filtrarVuelo(a, res){
    
    let arr = await traerVuelos();
    let arrImprimir = '################################\n ID: ' + arr[a-1].id + '\n' +'Origen: ' + arr[a-1].origin + '\n' + 'Destination: ' + arr[a-1].destination +'\n' + 'outbounDate: ' + arr[a-1].outboundDate +'\n' + 'inboundDate: ' + arr[a-1].inboundDate +'\n ################################\n';
    res.send(arrImprimir)

}

app.get('/fligth/:id?', (req, res) => {
    filtrarVuelo(req.params.id, res)
    

  })

app.get('/fligth', (req, res) => {
    devolverVuelo(res);
})

app.listen(3000, () =>{
    console.log('El servidor está funcionando');
})