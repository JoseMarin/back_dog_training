const express = require("express");
const db = require("./db.js");
const app = express();
const router = require('./router');
const port = process.env.PORT || 30066;
const cors = require('cors');

//Middleware
app.use(cors()); //Importante el orden en que declaramos.
app.use(express.json());
app.use(router);

db
.then(() => {
    // app.listen(port, () => console.log(`Node server runing on http://localhost:${port}` ));
    app.listen(process.env.PORT || 30066, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });
})
.catch((err) => console.log(err.message));

