const {Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('transaction', {
        id: {
            type: DataTypes.STRING(20),
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["lent", "returned"]
        },
        limitDate: {
            type: DataTypes.VIRTUAL,
            set() {
                const createdAt = this.getDataValue('createdAt');
                this.setDataValue('limitDate', createdAt + 1296000)
            },
            
        }
    })
}