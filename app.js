var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inscripcionesRouter= require('./routes/inscripciones');
var novedadesRouter= require('./routes/novedades');
var carritocomprasRouter= require('./routes/carritocompras');
var contactoRouter= require('./routes/contacto');
var loginRouter= require('./routes/login');
var cuentaRouter= require('./routes/cuenta');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inscripciones', inscripcionesRouter);
app.use('/novedades', novedadesRouter);
app.use('/carritocompras', carritocomprasRouter);
app.use('/contacto', contactoRouter);
app.use('/login', loginRouter);
app.use('/cuenta', cuentaRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
