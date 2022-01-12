const express = require("express");
const cors = require("cors");
const Products = require("./scheme/product")
const mongoose = require("mongoose");
const { db } = require("./scheme/product");
const app = express();
const PORT = process.env.PORT || 3001;
const dbURL = "mongodb+srv://vaishnav:v123@texol.uhvck.mongodb.net/test";

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>
    app.listen(PORT, () => {
        console.log("Started at ==>", PORT);
    })
)
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/addProd', (req, res) => {
    const name = req.body.name;
    const prodObj = new Products({ name: name, wId: 0 });
    prodObj.save().then((result) => {
        res.json(result);
    })
})
app.get('/viewProd', (req, res) => {
    Products.find({ wId: 0 }).then(result => {
        res.json(result);
    })
})
app.post('/delProd', (req, res) => {
    const name = req.body.name;
    Products.remove({ name: name }).then((result) => {
        res.json(result);
    })
})
app.post('/addwarehouse', (req, res) => {
    const name = req.body.name;
    const limit = req.body.limit;
    const wId = req.body.wId;
    const prodObj = new Products({ name: name, limit: limit, wId: wId });
    prodObj.save().then((result) => {
        res.json(result);
    })
})
app.get('/listwarehouse', (req, res) => {
    Products.find().then(result => {
        res.json(result);
    })
})