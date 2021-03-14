import express from 'express'
const router = express.Router();
import Product from '../controllers/productCtrl.js'

router.get('/',Product.getAllProduct);
router.get('/:id',Product.getDetailProduct);
export default router