module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        employeeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true, // Optional (photo bisa null)
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true, // Optional (notes bisa null)
        },
    }, {
        timestamps: false, // Nonaktifkan timestamps jika tidak diperlukan
    });

    return Employee;
};
