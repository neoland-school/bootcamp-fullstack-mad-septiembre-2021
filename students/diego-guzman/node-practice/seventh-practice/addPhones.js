import { MongoClient } from 'mongodb';
import express from 'express';



const app = express()
app.use(express.json());

const client = new MongoClient(URI);


app.post('/addsmartphone', async(req, res)=>{
    const id = await addSmartphone(req.body);
    res.json({ id });
})

async function addSmartphone(smartphone){
    try{
        await client.connect()
        const database = client.db('SmartphonesList')
        const smartphones = database.collection('Smartphones')
        const newSmartphone = await smartphones.insertOne(smartphone);
        return newSmartphone.insertedId
    }
    catch(err){
        console.log(err)
    }
    finally{
        await client.close();
    }

}



app.listen(3001, ()=> console.log('servidor Post Levantado'))