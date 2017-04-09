// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/blog', function(req, res) {
    res.render('pages/blog');
});

app.get('/design', function(req, res) {
    res.render('pages/design');
});

app.get('/handmade', function(req, res) {
    res.render('pages/handmade');
});

app.get('/garden-style', function(req, res) {
    res.render('pages/garden-style');
});

app.get('/japanese-garden', function(req, res) {
    res.render('pages/japanese-garden');
});

app.get('/modern-garden', function(req, res) {
    res.render('pages/modern-garden');
});

app.get('/cottage-garden', function(req, res) {
    res.render('pages/cottage-garden');
});

app.get('/mediterranean-garden', function(req, res) {
    res.render('pages/mediterranean-garden');
});

app.get('/english-garden', function(req, res) {
    res.render('pages/english-garden');
});

app.get('/formal-garden', function(req, res) {
    res.render('pages/formal-garden');
});

app.get('/naturalistic-garden', function(req, res) {
    res.render('pages/naturalistic-garden');
});

app.get('/french-garden', function(req, res) {
    res.render('pages/french-garden');
});

app.get('/minimalistic-garden', function(req, res) {
    res.render('pages/minimalistic-garden');
});

app.get('/services', function(req, res) {
    res.render('pages/services');
});

app.get('/survey-contact', function(req, res) {
    res.render('pages/survey-contact');
});

app.get('/portfolio', function(req, res) {
    res.render('pages/portfolio');
});

app.get('/slope-garden', function(req, res) {
    res.render('pages/slope-garden');
});

app.get('/recycling-garden', function(req, res) {
    res.render('pages/recycling-garden');
});

app.get('/play-with-light', function(req, res) {
    res.render('pages/play-with-light');
});

app.get('/portfolio/:project', function(req, res) {
    res.render('pages/portfolio-' + req.params.project);
});

app.get('/search', function(req, res) {
    res.render('pages/search');
});

app.use(express.static('public'));

app.listen(8080);
console.log('8080 is the magic port');