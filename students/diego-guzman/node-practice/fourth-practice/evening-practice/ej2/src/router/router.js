import express from 'express'
import { CONTACTLIST_PATH } from '../data-base/data.js';
import fs from 'fs/promises'

const router =  express.Router();


const getContactList= async (req,res)=>{
   const contacts = await fs.readFile(CONTACTLIST_PATH, { enconding: 'utf-8' });
   res.send(JSON.parse(contacts));
}


router.route('/')
    .get(getContactList)

export default router