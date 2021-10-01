/*
Author: Harman Singh
Date: 2021-10-01
Description: MY portfolio site

*/



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page:'home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page:'about'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products', page:'products'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page:'services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page:'contact'});
});
/*GET PDF */
router.get('/HarmanSinghResume.pdf', function(req, res, next) {
  res.render('index', { title: 'HarmanSinghResume', page:'HarmanSinghResume'});
});

module.exports = router;
