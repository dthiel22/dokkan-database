const router = require('express').Router();

//making route
const characterRoutes = require('./character-routes');
const categoryRoutes = require('./category-routes');
const linkRoutes = require('./link-routes');

//using route
router.use('/characters', characterRoutes);
router.use('/categories', categoryRoutes);
router.use('/links', linkRoutes);

module.exports = router;
