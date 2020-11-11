const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const http = require('http');
const pool = require('./config/db.config');
const index = require('./API/routes/index.route');

const express = require('express');
const app = express();
app.use(compression());
app.use(morgan('dev'));
app.options('*', cors());
app.use(cors({ origin: 'http://localhost:5000/' }));
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
pool.query('USE stackover');
global.pool = pool;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// all the api routes
app.use('/api', index);

// port initialized
const PORT = process.env.PORT || 5000;

// server setup
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});