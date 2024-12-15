const express = require('express');
const router = express.Router();
const {categoryNew, categoryShowAll, categoryByID, categoryUpdate, categoryDelete} = require('../controller/categories')

// Endpoint untuk menambahkan kategori baru
router.post('/CategoryNew', categoryNew);

// Endpoint untuk menampilkan semua kategori
router.get('/CategoryShowAll', categoryShowAll);

// Endpoint untuk menampilkan kategori berdasarkan ID
router.get('/CategoryByID/:id', categoryByID);

// Endpoint untuk memperbarui kategori berdasarkan ID
router.put('/CategoryUpdate/:id', categoryUpdate);

// Endpoint untuk menghapus kategori berdasarkan ID
router.delete('/CategoryDelete/:id', categoryDelete);

module.exports = router;