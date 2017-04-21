/**
 * 
 */

import {Router} from 'express';

import Cars from '../data/cars';

const app = new Router();

app.route('/')
.get((req, res) => {
    return res.json(Cars);
});

app.route('./Chevrolet')
.get((req, res) => {
    return res.json(Cars.filter(car => car.make === 'Chevrolet'));
});

app.route('./Ford')
.git((req, res) => {
    retrurn res.json(Cars.filter(car => car.make === 'Ford'));
});

app.route('./Others')
.git((req, res) => {
    retrurn res.json(Cars.filter(car => car.make !== 'Ford' && car.make !== 'Chevrolet'));
});

export defualt app;


