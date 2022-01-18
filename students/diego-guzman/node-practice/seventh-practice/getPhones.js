import { MongoClient } from 'mongodb';
import express from 'express';

const app = express()
app.use(express.json());

const client = new MongoClient(URI);

let smartphonesFromBBDD = '';

app.get('/smartphones', async (req, res) => {
    await retrieveSmartphones()
    res.send(smartphonesFromBBDD)
   
})

async function retrieveSmartphones(){
    try {
        await client.connect();
        const database = client.db('SmartphonesList')
        const smartphones = database.collection('Smartphones')
        // const sixGb = db.collection('Smartphones').find({ RAM: 6 });
        smartphonesFromBBDD = await smartphones.find({ RAM: "6GB" }).toArray()
        // smartphonesFromBBDD =  await smartphones.find().toArray()
        return await smartphonesFromBBDD
    }
    catch (err) {
        console.log(err)
    }
    finally {
        await client.close();
    }
}

app.listen(3000, () => console.log('Servidor Get levantado'))