const express = require('express');
const router = express.Router();

//Route for Home Page
router.get('/', (req,res) => {
    res.render('index.html', { title: 'CNO Page'});
});

//Route for Contact Page
router.get('/contact', (req,res) => {
    res.render('contact.html', { title: 'Contact'});
});

//Route for About Page
router.get('/about', (req,res) => {
    res.render('about.html', { title: 'About'});
});

//Route for Projects Page
router.get('/projects', (req,res) => {
    res.render('projects.html', { title: 'My Projects'});
});

module.exports = router;