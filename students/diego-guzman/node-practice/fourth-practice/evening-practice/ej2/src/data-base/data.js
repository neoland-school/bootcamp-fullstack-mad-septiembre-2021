import fs from 'fs/promises'
import path from 'path'
import { constants } from 'fs';

export const CONTACTLIST_PATH = path.dirname(process.argv[1]) + '/contact-list.json';

export async function getContactList(){

    try{
        await fs.access(CONTACTLIST_PATH, constants.R_OK|constants.W_OK)
        const CONTACTLIST= await fs.readFile(CONTACTLIST_PATH, { encoding: 'utf-8' })
        return JSON.parse(CONTACTLIST)
    }

    catch(err){
        await fs.writeFile(CONTACTLIST_PATH, '[]');
    }
}

