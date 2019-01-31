const bodyParser = require('body-parser')
const compress = require('compression');
const helmet = require('helmet');
const methodOverride = require('method-override');
const morgan = require('morgan')
const controllers = require('./api/controllers/index.controller');

// express framework
const app = require('express')()

// compress a HTTP message
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// adjusts for performance
app.set('etag', false);
app.set('x-powered-by', false);
app.enable('trust proxy');

app.use(morgan('dev'))

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// override HTTP verbs
app.use(methodOverride('_method'))

// mount all routes
app.use('/api', controllers);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error();
	err.status = 404;
	err.message = 'Not found';
	next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
	res.status(err.status || 500).json({ error: true, msg: err.detail || err.message })
});

app.listen(process.env.PORT, () =>  console.log(`Server running at port ${process.env.PORT}`))
