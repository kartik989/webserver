const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT ||3000;
var app=express();
app.set('view engine','hbs');
app.use(express.static( './public'));
app.get('/',(req,res)=>{
  res.send('<h1>hello express</h1>')

});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'kartik',
    currentyear:new Date().getFullYear()
  });
})

app.listen(port,()=>{
  console.log("server is up on"+port);
});
