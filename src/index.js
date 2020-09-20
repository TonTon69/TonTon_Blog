const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handexphbs = require('express-handlebars');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(methodOverride('_method'));

app.use(SortMiddleware);

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    handexphbs({
        extname: '.hbs',
        helpers: require('./helpers/hbs'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
