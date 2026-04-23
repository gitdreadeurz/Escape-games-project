import express from "express";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import optionRoute from './routes/optionRoute.js';
import escapeRoute from './routes/escapeRoute.js';
import paiementRoute from './routes/paiementRoute.js';
import userRoute from './routes/userRoute.js';
import avisRoute from './routes/avisRoute.js';
import reservationRoute from './routes/reservationRoute.js';
import ligneOptionRoute from './routes/ligneOptionRoute.js';
import authRoute from './routes/authRoute.js';

const app = express();
const port =3000;

app.use(express.json());
app.use('/auth', authRoute);

// Swagger setup
const swaggerDocument = yaml.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/user', userRoute);
app.use('/options', optionRoute);
app.use('/avis', avisRoute);
app.use('/games', escapeRoute);
app.use('/payments',paiementRoute);
app.use('/reservation', reservationRoute);
app.use('/ligneOptions', ligneOptionRoute);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${port}`);
})
