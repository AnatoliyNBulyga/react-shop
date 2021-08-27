require('dotenv').config();

const express = require('express');
const sequelize = require('./db.js');
const modules = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./rotes/');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use( express.static( path.resolve(__dirname, 'static') ) );
app.use(fileUpload({}));
app.use('/api', router);

// Error handler end Middleware
app.use(errorHandler);


const start = async () => {
    try {

        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
    } catch(e) {
        console.log(e)
    }
}

start();

