const express= require('express');
const path= require('path');
const app= express();

const indexRouter=require ('./Router/index');
const aboutRouter=require('./Router/about');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));
app.use('/',indexRouter);
app.use('/about',aboutRouter);

app.listen(8080);