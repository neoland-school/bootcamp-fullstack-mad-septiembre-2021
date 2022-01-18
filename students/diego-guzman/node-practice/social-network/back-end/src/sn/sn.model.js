import { MongoClient } from 'mongodb'
import { URI } from '../../config.js'
 

const client = new MongoClient(URI)

export async function getUserEmail(mail){
    try{
        await client.connect()
        const database = client.db('Social-Network')
        const users = database.collection('users')
        const exists = await users.findOne({email:mail})
        console.log(exists)
        // return exists
    }
    catch(err){
        console.log(err)
    }
    finally{
        await client.close()
    }
}


export async function registerUser(user){

    try{
        await client.connect()
        const database = client.db('Social-Network')
        const users = database.collection('users')
        const newUser = await users.insertOne(user)
        return newUser.insertedId
    }
    catch(err){
        console.log(err)
    }
    finally{
      await client.close()
    }

}