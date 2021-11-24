import { Mongoclient } from 'mongodb'

import express from 'express';

const URI = 'mongodb+srv://UserOne:Soren21@cluster0.lq3sz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()
app.use(express.json());






app.listen(3002, ()=> console.log('servidor Post Levantado'))