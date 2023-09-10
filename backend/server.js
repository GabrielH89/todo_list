const express = require('express');
const port = 4000;
const app = express();
const routes = require('./routes/taskRoute');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());
app.use(routes);
app.get("/", (req, res) => {
    res.send("Hello, world");
})

app.listen(port, () => console.log("Server is running at port " + port));