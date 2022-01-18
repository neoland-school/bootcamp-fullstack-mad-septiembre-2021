import { MongoClient } from 'mongodb'

import { URI } from '../../config'

const client = new MongoClient(URI)


export async function getUserName(user) {
    try {
        await client.connect()
        const database = client.db('UsersList')
        const users = database.collection('Users')
        const exists = await users.findOne({ userName: user.userName, userPassword: user.userPassword })
        console.log(exists)
        return exists
    }
    catch (err) {
        console.log(err)
    }

    finally {
        await client.close()
    }
}