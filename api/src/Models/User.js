const {Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('user', {
        id: {
            type: DataTypes.STRING(20),
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values: ["active", "banned"],
            defaultValue: "active",
            allowNull: false
        }
    })
}