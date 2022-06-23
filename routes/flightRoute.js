const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)
router.post('/BookFlight', controller.createFlight)
router.get('/AllFlights', controller.getAllFlights)
router.route('/Flight/:id').get(controller.getOneFlights).patch(controller.updateFlight).delete(controller.deleteOne)

module.exports = router;

