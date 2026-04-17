import express from "express";
import optionRoute from './routes/optionRoute.js';
import userRoutes from './routes/userRoute.js';
import escapeRoute from './routes/escapeRoute.js';

const app = express();
const port =3000;

app.use(express.json());

app.use('/user', userRoutes);
app.use('/options', optionRoute);
app.use('/games', escapeRoute);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${port}`);
})
