const app=require('./app.js')


//cambiamos a vercel
const port=process.env.PORT || 5000

app.use(require('./Router/Routes.js'))

app.listen(port,(error)=>{

    if(error){
        console.log(error)
    }else{
        console.log(`Server run on port ${port}`)
    }
})