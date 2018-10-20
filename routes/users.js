//model読み込み
const models = require('../models');

//expressルータ
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Users.create({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }).then( () => {
    res.redirect('/users');
  })
});

module.exports = router;
