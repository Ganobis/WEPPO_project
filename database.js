const Sequelize = require('sequelize');

let db = new Sequelize('ofrm19ex90au08of', 'ekgc4xu0i6tyzjka', 'v9vgj5xalj2fm4o6', {
    host: 'j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


const User = db.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    admin: {
        type: Sequelize.BOOLEAN
    },
    norders: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: false
});

User.sync();
console.log("The table for the User model was just (re)created!");

const Product = db.define('product', {
    image: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.FLOAT
    }
}, {
    timestamps: false
});

Product.sync();
console.log("The table for the User model was just (re)created!");

const Order = db.define('order', {
    customer: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    value: {
        type: Sequelize.FLOAT
    },
    json: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'processing'
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
}, {
    timestamps: false
});

Order.sync();
console.log("The table for the User model was just (re)created!");

module.exports = {
    db: db,
    User: User,
    Product: Product,
    Order: Order
};