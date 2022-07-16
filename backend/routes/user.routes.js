const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/profile', protect, getUser)
router.route('/:id').delete(protect, deleteUser).put(protect, updateUser)


module.exports = router