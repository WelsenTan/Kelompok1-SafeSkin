var express = require('express');
var router = express.Router();
const { authenticate, authorize } = require('../middleware/auth'); 
const {
    productNew,
    productShowAll,
    productById,
    productUpdate,
    productDelete,
} = require('../controller/products');

// Tambahkan produk baru
router.post('/addProduct', authenticate, authorize('admin'), productNew);

// Tampilkan semua produk
router.get('/', productShowAll);

// Tampilkan produk berdasarkan ID
router.get('/:id', productById);

// Perbarui produk berdasarkan ID
router.put('/:id', authenticate, authorize('admin'), productUpdate);

// Hapus produk berdasarkan ID
router.delete('/:id', authenticate, authorize('admin'), productDelete);

module.exports = router;
