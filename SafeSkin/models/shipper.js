module.exports = (sequelize, DataTypes) => {
    const Shipper = sequelize.define('Shipper', {
        shipperID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        shipperName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false, // Nonaktifkan timestamps jika tidak diperlukan
    });

    // Tambahkan fungsi asosiasi jika ada relasi
    Shipper.associate = (models) => {
        Shipper.hasMany(models.Order, { foreignKey: 'shipperID' }); // Relasi ke Order
    };

    return Shipper;
};
