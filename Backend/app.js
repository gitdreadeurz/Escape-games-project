import express from "express";
import optionRoute from './routes/optionRoute.js';
import escapeRoute from './routes/escapeRoute.js';
import paiementRoute from './routes/paiementRoute.js';
import userRoute from './routes/userRoute.js';
import avisRoute from './routes/avisRoute.js';
import reservationRoute from './routes/reservationRoute.js';
import ligneOptionsRoute from './routes/ligneOptionsRoute.js';

const app = express();
const port =3000;

app.use(express.json());

app.use('/user', userRoute);
app.use('/options', optionRoute);
app.use('/avis', avisRoute);
app.use('/games', escapeRoute);
app.use('/payments',paiementRoute);
app.use('/reservation', reservationRoute);
app.use('/ligneOptions', ligneOptionsRoute);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${port}`);
})
