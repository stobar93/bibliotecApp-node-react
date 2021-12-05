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
            get() {
                const rawValue = this.getDataValue('createdAt');
                return new Date(new Date(rawValue).getTime() + 1296000000)
            },
            
        }
    },{timestamps: true})
}