const express = require("express");
const db = require("./db");
const app = express();
const router = require('./router');
const port = process.env.PORT || 8080;
const cors = require('cors');

//Middleware
app.use(cors()); //Importante el orden en que declaramos.
app.use(express.json());
app.use(router);

db
.then(() => {
    app.listen(port, () => console.log(`Node server runing on http://localhost:${port}` ));
})
.catch((err) => console.log(err.message));

