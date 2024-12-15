module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false, // Nonaktifkan timestamps jika tidak diperlukan
    });

    // Relasi ke model Category
    Product.associate = (models) => {
        Product.belongsTo(models.Category, { foreignKey: 'categoryID' });
    };

    return Product;
};
