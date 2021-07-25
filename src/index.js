const express = require("express");
const app = express();
const router = require('./router');
const port = 3001;
const db = require("./db.js");
// const cors = require('cors');


// app.use(cors());
app.use(express.json());
app.use(router);


db
.then(() => {
    app.listen(port, () => console.log(`Node server runing on http://localhost:${port}` ));
})
.catch((err) => console.log(err.message));
