const express=require('express');
const hbs=require('hbs');
var app=express();
app.set('view engine','hbs');
app.use(express.static( './public'));
app.get('/',(req,res)=>{
  res.download('C:/Users/HP/Documents/yt.pdf');
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'kartik',
    currentyear:new Date().getFullYear()
  });
})

app.listen(3000);
