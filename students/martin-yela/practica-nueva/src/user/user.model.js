import { MongoClient } from "mongodb";
import { URL } from "../../config/bbddconfig.js";


const client = new MongoClient(URL);

export async function registerUser(user) {
    try {
        await client.connect();
        const dataBase = client.db('red-social');
        const users = dataBase.collection('users'); 
        const insert = await users.insertOne(user)
        return insert.insertedId;
    } finally {
        await client.close();
    }
}

export async function retrieverUser(mail){
    try {
        await client.connect();
        const dataBase = client.db('red-social');
        const users = dataBase.collection('users');
        return await users.findOne({email: mail});
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
    

}