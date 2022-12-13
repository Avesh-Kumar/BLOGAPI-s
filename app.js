const config=require('./config/index')
 require('./models/db')
const express = require('express');
const blogRouter=require('./routers/blogAPIRouter');
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',blogRouter);
app.set('view engine','ejs')






app.listen(config.port,()=>{
    console.log(`server is listining port no ${config.port}`);
})