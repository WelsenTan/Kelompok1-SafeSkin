module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('OrderDetail', {
        orderDetailID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false, // Nonaktifkan timestamps jika tidak diperlukan
    });

    // Menambahkan relasi dengan model lain
    OrderDetail.associate = (models) => {
        // Relasi ke Order
        OrderDetail.belongsTo(models.Order, { foreignKey: 'orderID' });
        // Relasi ke Product
        OrderDetail.belongsTo(models.Product, { foreignKey: 'productID' });
    };

    return OrderDetail;
};
