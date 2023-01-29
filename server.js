'use strict';

const express = require('express');

// App
const app = express();
app.use(express.static('public'));

app.listen(3000);