import express from "express";
import optionRoute from './routes/optionRoute.js';

const app = express();
const port =3000;

app.use(express.json());

app.use('/options', optionRoute);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${PORT}`);
})
