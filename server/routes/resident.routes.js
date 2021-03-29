const router = require('express').Router();
const resident = require('../controllers/resident.controller');

module.exports = (app) => {
  router.use('/:id', resident.byId);

  router.get('/', resident.findAll);
  router.get('/:id', resident.getById);
  router.post('/:id', resident.post);
  router.delete('/:id', resident.delete);

  app.use('/api/residents', router);
};