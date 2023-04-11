const app=require('./app.js')



app.set('port',process.env.PORT || 5000)

app.use(require('./Router/Routes.js'))

app.listen(app.get('port'),(error)=>{

    if(error){
        console.log(error)
    }else{
        console.log(`Server run on port ${app.get('port')}`)
    }
})