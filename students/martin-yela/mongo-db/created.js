import { MongoClient } from "mongodb";
import { url } from "./url.js";

const cliente = new MongoClient(url);

async function crearSmartphone() {
    try {
        await cliente.connect();
        const bd = cliente.db('tienda');
        const smartphones = bd.collection('smartphones') ;
        const doc = await tvs.insertOne(smartphones);
        return doc.insertedId;
    } catch (err) {
        console.log(err)
    } finally {
        await cliente.close();
    }
}

