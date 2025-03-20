const express = require('express');
const { authMiddleware } = require('../middleware/userMiddleware');
const upload = require('../middleware/uploadMiddleware');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/updatecoverimg', authMiddleware, upload.single('coverimg'), userController.updateCoverImage)
router.post('/updateprofileimg', authMiddleware, upload.single('profileimg'), userController.updateProfileImage)

module.exports = router;