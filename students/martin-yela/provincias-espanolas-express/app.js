import express from 'express';
import * as fs from 'fs/promises';
import path from 'path';
import { constants } from 'fs';

const app = express();
app.use(express.json());

let cities = [];
let citiesPath = path.dirname(process.argv[1]) + '/es-provs.json';

async function initCitiesList() {
    try {
        await fs.access(citiesPath, constants.R_OK | constants.W_OK);
        cities = await fs.readFile(citiesPath, { encoding: 'utf-8' });
        cities = JSON.parse(cities);
    } catch (error) {
        fs.writeFile(citiesPath, '[]');
    }
}

initCitiesList();

app.get('/province/:id', (req, res)=>{
    let citiesFilter = cities.find(c => c.id === parseInt(req.params.id));
    res.status(citiesFilter !== undefined ? 200 : 404);
    res.send(citiesFilter);
})

app.get('/province', (req, res)=>{
    res.send(cities);
})

app.post('/crearProvince', (req, res) => {
        let lastId = cities[cities.length-1]?.id ?? 0;
        // terminar de hacer que cree una nueva provincia
        // aca hay que hacerlo
})



app.listen(3000, () => console.log('El servidor está funcionando'))