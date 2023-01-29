'use strict';
import { argv } from 'node:process';
import express from 'express';

const app = express();
const port = argv[2];

app.use(express.static('public'));

if (port){app.listen(port);}
