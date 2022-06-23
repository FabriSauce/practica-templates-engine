const {Router} = require('express');
const mainController= require('../controllers/mainController')

const routes = Router();

routes.get('/', mainController.home);
routes.get('/detalleMenu/:id', mainController.detalleMenu)

module.exports = routes