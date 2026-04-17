import express from "express";
<<<<<<< HEAD
import optionRoute from './routes/optionRoute.js';
=======
import { connection } from "./config/db.js";
import userRoutes from './routes/userRoute.js'
>>>>>>> bf34802da3510bc6b4436c7a0ea7ddcbac2fa2e4

const app = express();
const port =3000;

app.use(express.json());
app.use(userRoutes);

app.use('/options', optionRoute);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${port}`);
})
