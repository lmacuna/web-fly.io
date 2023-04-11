const app=require('./src/app.js')



app.set('port',process.env.PORT || 4000)

app.use(require('./src/Router/Routes.js'))

app.listen(app.get('port'),(error)=>{

    if(error){
        throw error
    }else{
        console.log(`Server run on port ${app.get('port')}`)
    }
})