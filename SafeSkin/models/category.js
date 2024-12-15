module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        categoryID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,  // Nonaktifkan timestamps jika tidak diperlukan
    });

    // Jika ada asosiasi yang perlu didefinisikan di sini, letakkan di bawah
    // Category.associate = (models) => {
    //     // Misalnya, jika Category berhubungan dengan Product
    //     Category.hasMany(models.Product, { foreignKey: 'categoryID' });
    // };

    return Category;
};
