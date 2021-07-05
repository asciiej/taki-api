import router from './routes/routes';

const express = require('express');

const app = express();

app.use(express.json());
app.use(router);

export default app;
