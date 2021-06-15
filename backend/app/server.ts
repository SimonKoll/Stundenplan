// import express = require('express');
import express from 'express';
import { Controller } from './controller/controller';
import cors from 'cors';

// Server erzeugen
var server = express();

// Static Content aktivieren
// Beispiel: http://localhost:8080/index.html
server.use(cors());

server.use(express.static('public'));

// JSON Body parser aktivieren
server.use(express.json());

// CORS aktivieren
//server.use (cors);

server.get('/api/echo', (request, response) => {
    response.send('Hello NodeJS');
});

server.post('/api/save', (request, response) => {
    response.send('Hello NodeJS');
});

server.use('/server/api/rest', Controller.handler());

const port = 8080;
server.listen(port, () => {
    console.log(`API is listening on port ${port}`);
});
