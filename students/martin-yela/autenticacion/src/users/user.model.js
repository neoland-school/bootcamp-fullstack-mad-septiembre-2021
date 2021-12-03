import { URI } from './config/bbddConfig.js';
import { MongoClient } from 'mongodb';


const client = new MongoClient(URI); 

export async function authLogin(mail, pass) {
    try {
        await client.connect();
         const db = client.db('red-social');
         const users = db.collection('users');
         return await users.findOne({email: mail, password : pass})

    } catch (error) {
        console.log(error)
    } finally{
        client.close();
    }
}

