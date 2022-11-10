const router = require('express').Router();

//making route
const characterRoutes = require('./character-routes');

//using route
router.use('/characters', characterRoutes);

module.exports = router;
