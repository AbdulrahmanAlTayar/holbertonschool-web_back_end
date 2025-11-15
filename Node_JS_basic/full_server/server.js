import express from 'express';
import setupRoutes from './routes/index.js';

const app = express();

setupRoutes(app);

app.listen(1245);

export default app;
