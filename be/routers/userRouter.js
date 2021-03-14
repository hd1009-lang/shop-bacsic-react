import express from 'express'
import User from '../controllers/userCtrl.js';
import auth from '../middleware/auth.js'
const router=express.Router();

router.post(`/login`,User.authUser)
router.get(`/get-info`,auth,User.getInfor)
router.post(`/register`,User.register);
router.put(`/profile`,auth,User.updateInfo)
export default router