var express = require('express');
// const { db } = require('../models/db');
var router = express.Router();
// const dbConnect = require('../db');
const prods = require('../service/products');

/* GET home page. */
router.get('/', async function (req, res, next) {
  prods
    .createProduct()
    .then((data) => {
      console.log(data)
      res.json(data);
    })
    .catch();
  // res.send('boom');
});

module.exports = router;
