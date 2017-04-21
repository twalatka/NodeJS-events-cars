import Express from 'express';
import Parser from 'body-parser';

import Carss from './data/cars';

import CarssRoute from './route/carss.js';

const app = Express();
const port = process.env.PORT || 3000;

app.use(Parser.json());
app.use('/cars', CarsRoute);

app.listen(port, () => console.log(`App start: http://localhost:3000`));

export default app