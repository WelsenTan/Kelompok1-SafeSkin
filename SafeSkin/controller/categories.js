// Endpoint untuk menambahkan kategori baru
const categoryNew = async (req, res, next) => {
    try {
        const { categoryName, description } = req.body;
        const newCategory = await Category.create({ categoryName, description });
        return res.status(201).json(newCategory);
    } catch (err) {
        return res.status(400).json(error)
    }
};

// Endpoint untuk menampilkan semua kategori
const categoryShowAll = async (req, res, next) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        next(err);
    }
};

// Endpoint untuk menampilkan kategori berdasarkan ID
const categoryByID = async (req, res, next) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Endpoint untuk memperbarui kategori berdasarkan ID
const categoryUpdate = async (req, res, next) => {
    try {
        const { categoryName, description } = req.body;
        const category = await Category.findByPk(req.params.id);
        if (category) {
            category.categoryName = categoryName;
            category.description = description;
            await category.save();
            res.json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Endpoint untuk menghapus kategori berdasarkan ID
const categoryDelete = async (req, res, next) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            await category.destroy();
            res.json({ message: 'Category deleted' });
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    categoryNew,
    categoryShowAll,
    categoryByID,
    categoryUpdate,
    categoryDelete,
};
