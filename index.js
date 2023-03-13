const ex=require('express')
PORT=process.env.PORT||2902
app=ex();
app.get('/',(req,res)=>{
    res.render("../views/home.ejs")
})
app.listen(PORT,(()=>{
    console.log(`App is running ${PORT}`);
}))