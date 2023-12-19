const express = require("express");
require("dotenv").config();

const app = express();

//Public HTML
app.use(express.static("public"));

//Parse del body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/login', require('./routes/login'));
app.use('/api/countries', require('./routes/countries'));


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})

