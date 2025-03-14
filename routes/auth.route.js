const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/signin', authController.signin);
router.get('/isauth', auth(), authController.isauth);
router.post('/forget-password', authController.forgetPassword)
router.post('/reset-password', authController.resetPassword)

module.exports = router;
    