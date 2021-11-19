import express from 'express';
import fs from 'fs/promises'
import path from 'path'
import { constants } from 'fs';


const app = express();
app.use(express.json());

let provinces = [];

const PROVINCE_DATA_PATH = path.dirname(process.argv[1]) + '/es-provs.json';


async function initProvinceData(){
    try{
        await fs.access(PROVINCE_DATA_PATH, constants.R_OK | constants.W_OK)
        provinces = await fs.readFile(PROVINCE_DATA_PATH, { encoding : 'utf-8' });
        return JSON.parse(provinces)
    }
    catch(err){
        fs.writeFile(PROVINCE_DATA_PATH, '[]')
        return []
    }

}
initProvinceData().then(p => provinces = p);


app.get('/provinces', (req,res)=>{
    res.send(provinces)
})

app.get('/provinces/:id', (req,res)=>{
    const searchedProvince = provinces.find(f=>f.id===parseInt(req.params.id))
    res.status(searchedProvince!==undefined? 200:404);
    res.send(searchedProvince)
})


app.post('/provinces', (req,res)=>{

    const lastId = provinces[provinces.length-1]?.id??0;
    const newProvince = {id: lastId+1, ...req.body}
    provinces.push(newProvince);
    fs.writeFile(PROVINCE_DATA_PATH, JSON.stringify(provinces));
    res.status(201).json({id: newProvince.id})

})

app.listen(3000, () => console.log('El servidor está levantado'))



