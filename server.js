const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Terraform app!'));

app.listen(7890);

