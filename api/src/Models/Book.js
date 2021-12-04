const { Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('book', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subject: {
            type: DataTypes.ENUM,
            values: ["Arts & Photography",
                "Biographies & Memoirs",
                "Business & Money",
                "Children's eBooks",
                "Comics, Manga & Graphic Novels",
                "Computers & Technology",
                "Cookbooks, Food & Wine",
                "Crafts, Hobbies & Home",
                "Education & Teaching",
                "Engineering & Transportation",
                "Foreign Languages",
                "Health, Fitness & Dieting",
                "History",
                "Humor & Entertainment",
                "Law",
                "LGBTQ+ eBooks",
                "Literature & Fiction",
                "Medical eBooks",
                "Mystery, Thriller & Suspense",
                "Nonfiction",
                "Parenting & Relationships",
                "Politics & Social Sciences",
                "Reference",
                "Religion & Spirituality",
                "Romance",
                "Science & Math",
                "Science Fiction & Fantasy",
                "Self-Help",
                "Sports & Outdoors",
                "Teen & Young Adult",
                "Travel"],
                allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
}