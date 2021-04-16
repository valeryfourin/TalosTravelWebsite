require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
// const PORT = process.env.PORT;
const path = require('path')
// var morgan = require('morgan');

// app.use(morgan('dev'));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static' )));
app.use(fileUpload({}));
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'application/json')
//   })

// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use('/api', router);
// Обработка ошибок, последний Middleware
app.use(errorHandler);

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'WORKING!'});
// });

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start()


