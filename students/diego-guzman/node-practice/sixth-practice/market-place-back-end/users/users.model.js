import fs from 'fs/promises'

const FILE_PATH = './users.json'

export async function retrieveUsers(){

    try{
        const users = await fs.readFile(FILE_PATH,'utf-8')
        return JSON.parse(users)
    }
    catch(err){
        await fs.writeFile(FILE_PATH, '[]')
        return []
    }

}

export async function createUser(user){
    const users = await retrieveUsers();
    const lastId = users[users.length-1]?.id?? 0;
    const newUser = { ...user, id: lastId+1 }
    users.push(newUser);
    fs.writeFile(FILE_PATH, JSON.stringify(users))
    return lastId+1
}