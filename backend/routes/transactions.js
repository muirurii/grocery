const router = require('express').Router();
const transactionControntrollers = require('../controllers/transactionControllers');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, transactionControntrollers.getTransactions);
router.post('/', verifyToken, transactionControntrollers.makeTransaction);

module.exports = router;