import express from 'express'
const router = express.Router();
import auth from '../middleware/auth.js'
import order from '../controllers/orderCtrl.js'

router.post(`/`,auth,order.createOrder);
router.get(`/:id`,auth,order.getOrderById);
export default router