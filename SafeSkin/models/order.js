module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        orderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Customers', // Nama tabel relasi
                key: 'customerID',
            },
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        employeeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Employees', // Nama tabel relasi
                key: 'employeeID',
            },
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        shipperID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Shippers', // Nama tabel relasi
                key: 'shipperID',
            },
        },
    }, {
        timestamps: false, // Nonaktifkan timestamps jika tidak dibutuhkan
    });

    // Tambahkan asosiasi jika diperlukan
    Order.associate = (models) => {
        Order.belongsTo(models.Customer, { foreignKey: 'customerID' });
        Order.belongsTo(models.Employee, { foreignKey: 'employeeID' });
        Order.belongsTo(models.Shipper, { foreignKey: 'shipperID' });
        Order.hasMany(models.OrderDetail, { foreignKey: 'orderID' });
    };

    return Order;
};
