import express from "express";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import cookieParser from "cookie-parser";
import cors from "cors";
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
app.use(cookieParser());
app.use(cors());

// Swagger setup
const swaggerDocument = yaml.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/user', userRoute);
app.use('/option', optionRoute);
app.use('/avis', avisRoute);
app.use('/game', escapeRoute);
app.use('/paiement',paiementRoute);
app.use('/reservation', reservationRoute);
app.use('/ligneoption', ligneOptionRoute);

app.listen(port,()=>{
    console.log(`Serveur express demarre sur http://localhost:${port}`);
})
