const {Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('transaction', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["open", "closed"]
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