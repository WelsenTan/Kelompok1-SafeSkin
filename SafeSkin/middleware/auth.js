const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    // Pastikan header Authorization ada
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Ambil token dari header
    const token = authHeader.replace('Bearer ', '');

    try {
        // Verifikasi token
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded; // Tambahkan user ke req
        next(); // Lanjut ke middleware berikutnya
    } catch (err) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

const authorize = (roles = []) => {
    return (req, res, next) => {
        // Pastikan user memiliki peran yang sesuai
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next(); // Lanjut ke middleware berikutnya
    };
};

module.exports = { authenticate, authorize };
