const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParser = require('pdf-parse');

const app = express();

app.use(express.json());
app.use(fileUpload());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port ${PORT}`));
