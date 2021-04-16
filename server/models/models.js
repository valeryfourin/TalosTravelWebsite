const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    number: {type: DataTypes.BIGINT, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    previousOrders: {type: DataTypes.STRING, defaultValue: "none"},
});

const Tour = sequelize.define( 'tour', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: true},
    country: {type: DataTypes.STRING, allowNull: true},
    type: {type: DataTypes.STRING, defaultValue: "bus" },
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
    nights: {type: DataTypes.INTEGER},
    startDate: {type: DataTypes.STRING},
    endDate: {type: DataTypes.STRING},
    cost: {type: DataTypes.INTEGER, allowNull: true},
    activities: {type: DataTypes.TEXT}
});

const Account = sequelize.define( 'account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const TourInAccount = sequelize.define( 'tourInAccount', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Accommodation = sequelize.define( 'accommodation', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING},
    stars: {type: DataTypes.INTEGER},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    address: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false},
    nights: {type: DataTypes.INTEGER},
    startDate: {type: DataTypes.STRING},
    endDate: {type: DataTypes.STRING},
    availability: {type: DataTypes.BOOLEAN, defaultValue: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    tourId: {type: DataTypes.INTEGER},

});

const Order = sequelize.define( 'order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: "Waiting"},
    tourId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    nights: {type: DataTypes.INTEGER},
    startDate: {type: DataTypes.STRING},
    endDate: {type: DataTypes.STRING},
    numberOfPeople: {type: DataTypes.INTEGER},
    totalPrice: {type: DataTypes.INTEGER},
    paymentStatus: {type: DataTypes.STRING, defaultValue: "Paid"}
});

const Payment = sequelize.define( 'payment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    orderId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    paymentSum: {type: DataTypes.INTEGER, allowNull: false},
    paymentCheck: {type: DataTypes.BOOLEAN, allowNull: false}
});

const Contract = sequelize.define( 'contract', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    orderId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    customerInfo: {type: DataTypes.STRING, allowNull: false}
});

// decide what to do with accommodation

User.hasOne(Account);
Account.belongsTo(User);

Account.hasMany(TourInAccount);
TourInAccount.belongsTo(Account);

User.hasMany(Contract);
Contract.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Tour.hasMany(Accommodation);
Accommodation.belongsTo(Tour);

Tour.hasMany(Order);
Order.belongsTo(Tour);

Order.hasOne(Payment);
Payment.belongsTo(Order);

module.exports = {
    User,
    Tour,
    Account,
    TourInAccount,
    Accommodation,
    Order,
    Payment,
    Contract
}

