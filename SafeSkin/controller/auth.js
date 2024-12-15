const User = require('../models/user');
const bcrypt = require('bcryptjs'); // Tambahkan ini
const jwt = require('jsonwebtoken');

// Rute pendaftaran
const registerUser = async (req, res, next) => {  
    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password sebelum disimpan
        const newUser = await User.create({ username, password: hashedPassword, role });
        const token = jwt.sign(
            { id: newUser.id, role: newUser.role },
            'your_jwt_secret',
            { expiresIn: '1h' }
        );
        return res.status(201).json({ newUser, token });
    } catch (err) {
        next(err); 
    }
};

// Rute login
const loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign(
            { id: user.id, role: user.role },
            'your_jwt_secret',
            { expiresIn: '1h' }
        );
        return res.status(201).json({ user, token });
    } catch (err) {
        next(err);
    }
};

module.exports = { registerUser, loginUser };
