const { Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subject: {
            type: DataTypes.ENUM,
            values: ["Arts",
                "Biographies",
                "Business",
                "Children's",
                "Comics",
                "Computers",
                "Cookbooks",
                "Crafts",
                "Education",
                "Engineering",
                "Languages",
                "Fitness",
                "History",
                "Humor",
                "Law",
                "LGBTQ+",
                "Literature",
                "Medical",
                "Mystery",
                "Nonfiction",
                "Parenting",
                "Politics",
                "Religion",
                "Romance",
                "Science",
                "Fiction",
                "Self-Help",
                "Thriller",
                "Sports",
                "Travel"],
                allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        indexes: [
          { 
            unique: true,   
            name: 'unique_title',  
            fields: [sequelize.fn('lower', sequelize.col('title'))]   
          }
        ]
      })
}