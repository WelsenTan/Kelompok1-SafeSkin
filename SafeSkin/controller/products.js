const { Product } = require('../models'); // Pastikan path benar

// Tambahkan produk baru
const productNew = async (req, res) => {
    try {
        const { productName, productDescription, productPrice } = req.body;
        if (!productName || !productDescription || !productPrice) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newProduct = await Product.create({ productName, productDescription, productPrice });
        return res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

// Tampilkan semua produk
const productShowAll = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

// Tampilkan produk berdasarkan ID
const productById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

// Perbarui produk berdasarkan ID
const productUpdate = async (req, res) => {
    try {
        const { productName, productDescription, productPrice } = req.body;
        const product = await Product.findByPk(req.params.id);
        if (product) {
            product.productName = productName || product.productName;
            product.productDescription = productDescription || product.productDescription;
            product.productPrice = productPrice || product.productPrice;
            await product.save();
            res.json({ message: 'Product updated successfully', product });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

// Hapus produk berdasarkan ID
const productDelete = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

module.exports = {
    productNew,
    productShowAll,
    productById,
    productUpdate,
    productDelete,
};
