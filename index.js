import express from 'express'
import 'dotenv/config';
const app = express();
const port  = process.env.PORT || 5000;




app.listen(port,()=>console.log(`server is listening on port ${process.env.PORT}`));