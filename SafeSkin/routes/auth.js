const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerUser, loginUser} = require('../controller/auth')

// Rute pendaftaran
router.post('/register', registerUser);

// Rute login
router.post('/login', loginUser);


module.exports = router;