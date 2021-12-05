const books = [
    {
        title: "The Art of War",
        author: "Sun Tzu",
        subject: "Business",
        year: 2016,
        imgUrl: "https://m.media-amazon.com/images/I/51L9eRr+jZL.jpg"
    },
    {
        title: "An Ember in the Ashes",
        author: "Sabaa Tahir",
        subject: "Fiction",
        year: 2015,
        imgUrl: "https://m.media-amazon.com/images/I/51ZtFdDCGML.jpg"
    },
    {
        title: "Night",
        author: "Elie Wiesel",
        subject: "Biographies",
        year: 2012,
        imgUrl: "https://m.media-amazon.com/images/I/41o5wHWimmL.jpg"
    },{
        title: "Food Rules: An Eater's Manual",
        author: "Michael Pollan",
        subject: "Fitness",
        year: 2009,
        imgUrl: "https://m.media-amazon.com/images/I/41-IFLygz9S.jpg"
    },{
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        subject: "Literature",
        year: 2017,
        imgUrl: "https://m.media-amazon.com/images/I/41VNT4E0rXL.jpg"
    },{
        title: "Redemption ",
        author: "David Baldacci",
        subject: "Mystery",
        year: 2019,
        imgUrl: "https://m.media-amazon.com/images/I/51dnXWMsGiL.jpg"
    },{
        title: "Who Moved My Cheese?",
        author: "Spencer Johnson",
        subject: "Self-Help",
        year: 1998,
        imgUrl: "https://m.media-amazon.com/images/I/51oe4MOB9fL.jpg"
    },{
        title: "Llama Llama Red Pajama",
        author: "Anna Dewdney",
        subject: "Children's",
        year: 2005,
        imgUrl: "https://m.media-amazon.com/images/I/51a4SINvoUL.jpg"
    },{
        title: "Echo Burning",
        author: "Lee Child",
        subject: "Thriller",
        year: 2011,
        imgUrl: "https://m.media-amazon.com/images/I/515RWWsdVvL.jpg"
    },{
        title: "Binge ",
        author: "Tyler Oakley",
        subject: "Biographies",
        year: 2015,
        imgUrl: "https://m.media-amazon.com/images/I/61CJyf9LOhL.jpg"
    },{
        title: "Gorilla Mindset",
        author: "Mike Cernovich",
        subject: "Self-Help",
        year: 2015,
        imgUrl: "https://m.media-amazon.com/images/I/61dDDVMD2bL.jpg"
    },{
        title: "White Hot: A Hidden Legacy Novel",
        author: "Ilona Andrews",
        subject: "Romance",
        year: 2017,
        imgUrl: "https://m.media-amazon.com/images/I/51I1RqUPqSL.jpg"
    },{
        title: "Fever",
        author: "Maya Banks",
        subject: "Romance",
        year: 2013,
        imgUrl: "https://m.media-amazon.com/images/I/41eEulwUbCL.jpg"
    },{
        title: "Mediterranean Diet for Beginners",
        author: "Brandon Hearn",
        subject: "Cookbooks",
        year: 2019,
        imgUrl: "https://m.media-amazon.com/images/I/51vGg3sb6hL.jpg"
    },{
        title: "Rich Dad's CASHFLOW Quadrant",
        author: "Robert T. Kiyosaki",
        subject: "Business",
        year: 2015,
        imgUrl: "https://m.media-amazon.com/images/I/51lfjL0S8EL.jpg"
    },{
        title: "The Year of Living Biblically",
        author: "A. J. Jacobs",
        subject: "Religion",
        year: 2007,
        imgUrl: "https://m.media-amazon.com/images/I/51uDoPV6tqL.jpg"
    },{
        title: "Invisible",
        author: "James Patterson",
        subject: "Thriller",
        year: 2014,
        imgUrl: "https://m.media-amazon.com/images/I/41D3FM5C1WL.jpg"
    },{
        title: "The Body Book",
        author: "Cameron Diaz",
        subject: "Fitness",
        year: 2015,
        imgUrl: "https://m.media-amazon.com/images/I/512h9OTSK9L.jpg"
    },{
        title: "When You Disappeared",
        author: "John Marrs",
        subject: "Thriller",
        year: 2017,
        imgUrl: "https://m.media-amazon.com/images/I/51X4YYeICrL.jpg"
    },{
        title: "As You Wish",
        author: "Cary Elwes",
        subject: "Biographies",
        year: 2014,
        imgUrl: "https://m.media-amazon.com/images/I/51u9bIrQp-L.jpg"
    },{
        title: "Bob Books Set 1",
        author: "Bobby Lynn Maslen",
        subject: "Children's",
        year: 2013,
        imgUrl: "https://m.media-amazon.com/images/I/51ba18PrusL.jpg"
    },{
        title: "Alex",
        author: "Adam J Nicolai",
        subject: "Thriller",
        year: 2011,
        imgUrl: "https://m.media-amazon.com/images/I/51W5cdstPbL.jpg"
    },{
        title: "The Obstacle Is the Way",
        author: "Ryan Holiday",
        subject: "Business",
        year: 2014,
        imgUrl: "https://m.media-amazon.com/images/I/41YYbVCk+fL.jpg"
    },{
        title: "Angels Watching Over Me",
        author: "Michael Phillips",
        subject: "Romance",
        year: 2003,
        imgUrl: "https://m.media-amazon.com/images/I/51XItO4iU0L.jpg"
    },{
        title: "The Cruelest Month",
        author: "Louise Penny",
        subject: "Mystery",
        year: 2008,
        imgUrl: "https://m.media-amazon.com/images/I/51WotX5zhUL.jpg"
    },{
        title: "The Paid Bridesmaid",
        author: "Sariah Wilson",
        subject: "Romance",
        year: 2021,
        imgUrl: "https://m.media-amazon.com/images/I/51lPGkg0tzL.jpg"
    },{
        title: "PHARMACEUTICS - I",
        author: "Dr. P. V. Kasture",
        subject: "Medical",
        year: 2017,
        imgUrl: "https://m.media-amazon.com/images/I/41aUuSoL-PL.jpg"
    },{
        title: "The Keeper of Happy Endings",
        author: "Barbara Davis",
        subject: "Fiction",
        year: 2021,
        imgUrl: "https://m.media-amazon.com/images/I/51BbtnhHSYL.jpg"
    },{
        title: "A (Very) Short History of Life on Earth",
        author: "Henry Gee",
        subject: "Science",
        year: 2021,
        imgUrl: "https://m.media-amazon.com/images/I/51p0tkQIZaL.jpg"
    },{
        title: "The Love Hypothesis",
        author: "Ali Hazelwood",
        subject: "Romance",
        year: 2021,
        imgUrl: "https://m.media-amazon.com/images/I/51W67HAv7oL.jpg"
    },{
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        subject: "Fiction",
        year: 2021,
        imgUrl: "https://m.media-amazon.com/images/I/41Lq0vHRzrS.jpg"
    }
    ,{
        title: "Kingdom of the Wicked",
        author: "Kerri Maniscalco",
        subject: "Fiction",
        year: 2020,
        imgUrl: "https://m.media-amazon.com/images/I/51vB2XIGKNS.jpg"
    },{
        title: "Chosen",
        author: "K.F. Breene",
        subject: "Fiction",
        year: 2014,
        imgUrl: "https://m.media-amazon.com/images/I/51ibQAWPVyL.jpg"
    },
]

module.exports = books