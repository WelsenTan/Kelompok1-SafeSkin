module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define('Supplier', {
        supplierID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        supplierName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false, // Nonaktifkan timestamps jika tidak dibutuhkan
    });

    // Tambahkan asosiasi jika diperlukan
    Supplier.associate = (models) => {
        Supplier.hasMany(models.Product, { foreignKey: 'supplierID' });
    };

    return Supplier;
};
