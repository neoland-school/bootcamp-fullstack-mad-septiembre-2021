import express from 'express';
import fs from 'fs/promises';
import { access, constants } from 'fs';
import path from 'path';

const pathUser = path.dirname(process.argv[1]) + '/users.json';

export async function getUser() {
    try {
        await fs.access(pathUser, constants.F_OK | constants.R_OK);
        let listUser = await fs.readFile(pathUser, 'utf-8');
        
        return JSON.parse(listUser);
        
    } catch (error) {
        fs.writeFile(pathUser, '[]');
        return [];
    }
}

export async function crearUser(user) {
    const listUser = await getUser();

    if ( listUser.some(e => (e.nombre === user.nombre))) return 'ko'
    const lastId = listUser[listUser.length-1]?.id ?? 0;
    const newUser = {...user, id:lastId+1};
    listUser.push(newUser);
    fs.writeFile(pathUser, JSON.stringify(listUser));
    return 'ok'
}
