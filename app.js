const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
