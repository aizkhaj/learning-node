const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers.js');

// Do work here
router.route('/')
  .get(storeController.myMiddleware, storeController.homePage);

router.route('/add')
  .get(storeController.addStore)
  .post(catchErrors(storeController.createStore));

module.exports = router;
