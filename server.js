const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT ||3000;
var app=express();
app.set('view engine','hbs');
app.use(express.static( './public'));
app.get('/',(req,res)=>{
  res.render('home.hbs')
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'kartik',
    currentyear:new Date().getFullYear()
  });
});
app.get('/portfolio',(req,res)=>{
  res.render('portfolio.hbs',{
    pageTitle:'portfolio'
  })
})

app.listen(port,()=>{
  console.log("server is up on"+port);
});
