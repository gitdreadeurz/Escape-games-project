import express from "express";
import optionRoute from './routes/optionRoute.js';
import userRoute from './routes/userRoute.js';
import avisRoute from './routes/avisRoute.js'

const app = express();
const port =3000;

app.use(express.json());

app.use('/user', userRoute);
app.use('/options', optionRoute);
app.use('/avis', avisRoute);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${port}`);
})
