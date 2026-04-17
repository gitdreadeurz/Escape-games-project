import express from "express";
import { connection } from "./config/db.js";
import userRoutes from './routes/userRoute.js'

const app = express();
const port =3000;

app.use(express.json());
app.use(userRoutes);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${port}`);
})
