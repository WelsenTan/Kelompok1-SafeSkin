const { Sequelize } = require('sequelize');
// Konfigurasi koneksi Sequelize
const sequelize = new Sequelize('safeskindb', 'root', '', {
 host: 'localhost',
 dialect: 'mysql'

});

const Customer = require('./customer')(sequelize, Sequelize.DataTypes);
const Employee = require('./employee')(sequelize, Sequelize.DataTypes);
const Products = require('./products')(sequelize, Sequelize.DataTypes);
const Supplier = require('./supplier')(sequelize, Sequelize.DataTypes);
const Order = require('./order')(sequelize, Sequelize.DataTypes);
const Shipper = require('./shipper')(sequelize, Sequelize.DataTypes);
const OrderDetail = require('./orderdetails')(sequelize, Sequelize.DataTypes);
const Category = require('./category')(sequelize, Sequelize.DataTypes);

// Relasi antara model
Customer.hasMany(Order, { foreignKey: 'customerID' });
Order.belongsTo(Customer, { foreignKey: 'customerID' });

Employee.hasMany(Order, { foreignKey: 'employeeID' });
Order.belongsTo(Employee, { foreignKey: 'employeeID' });

Shipper.hasMany(Order, { foreignKey: 'shipperID' });
Order.belongsTo(Shipper, { foreignKey: 'shipperID' });

Supplier.hasMany(Products, { foreignKey: 'supplierID' });
Products.belongsTo(Supplier, { foreignKey: 'supplierID' });

Category.hasMany(Products, { foreignKey: 'categoryID' });
Products.belongsTo(Category, { foreignKey: 'categoryID' });

Order.hasMany(OrderDetail, { foreignKey: 'orderID' });
OrderDetail.belongsTo(Order, { foreignKey: 'orderID' });

Products.hasMany(OrderDetail, { foreignKey: 'productID' });
OrderDetail.belongsTo(Products, { foreignKey: 'productID' });

// Uji koneksi
sequelize.authenticate()
 .then(() => {
 console.log('Connection has been established successfully.');
 })
 .catch(err => {
 console.error('Unable to connect to the database:', err);
 });
// Ekspor instance sequelize untuk digunakan di tempat lain
module.exports = sequelize;