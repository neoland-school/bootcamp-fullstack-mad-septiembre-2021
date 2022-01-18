import fs from 'fs/promises'
import { constants } from 'fs'
import path from 'path'

export const FILE_DATA_PATH = path.dirname(process.argv[1]) + '/courses.json'

export async function getDataFromStorage(){

    try{
        await fs.access(FILE_DATA_PATH, constants.R_OK| constants.W_OK)
        const course = await fs.readFile(FILE_DATA_PATH, { encoding: 'utf-8' })
        return JSON.parse(course)
    }
    catch(err){
        fs.writeFile(FILE_DATA_PATH, '[]')
        return[]
    }
}