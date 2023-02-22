var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
// 前端接口
var connection = require('./config/dbconfig')
var indexRouter = require('./routes/front/index');
var frontSystemRouter = require('./routes/front/system')
var frontArticleRouter = require('./routes/front/article')
var frontExternal = require('./routes/front/external')
var frontComment = require('./routes/front/comment')
//	管理端接口
var usersRouter = require('./routes/admin/users');
var systemRouter = require('./routes/admin/system')
var dashboardRouter = require('./routes/admin/dashboard')
var personalRouter = require('./routes/admin/personal')
var articleRouter = require('./routes/admin/article')
var commentRouter = require('./routes/admin/comment')
var pagesRouter = require('./routes/admin/pages')
var linkRouter = require('./routes/admin/link')
var extRouter = require('./routes/admin/external')
// express中操作mysql用的是mysql模块
var app = express();

// 连接mysql
connection.connect((err) => {
	if (err) {
		console.log('数据库连接失败:',err)
	} else {
		console.log('数据库连接成功')
	}
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/system', frontSystemRouter)
app.use('/article', frontArticleRouter)
app.use('/external', frontExternal)
app.use('/comment', frontComment)

app.use('/admin/users', usersRouter);
app.use('/admin/system', systemRouter)
app.use('/admin/dashboard', dashboardRouter)
app.use('/admin/personal', personalRouter)
app.use('/admin/article', articleRouter)
app.use('/admin/comment', commentRouter)
app.use('/admin/pages', pagesRouter)
app.use('/admin/link', linkRouter)
app.use('/admin/external', extRouter)
// 跨域设置
app.all("*", function (req, res, next) {
	//设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", "*");
	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type");
	//跨域允许的请求方式 
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
	if (req.method == 'OPTIONS')
		res.sendStatus(200); //让options尝试请求快速结束
	else
		next();
})
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
