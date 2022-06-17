const router = require('express').Router();
const productControllers = require('../controllers/productsControllers');

router.get('/all', productControllers.getAllProducts);
router.get('/featured', productControllers.getFeaturedProducts);
router.get('/:product', productControllers.getProduct);
router.get('/category/:category', productControllers.getCategory);

module.exports = router;