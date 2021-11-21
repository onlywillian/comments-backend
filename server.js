const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require('./api/routes/route')(app);

app.listen(process.env.PORT || 3001);