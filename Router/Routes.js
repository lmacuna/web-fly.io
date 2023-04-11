const Route=require("express").Router()
const cors=require("cors")

const morgan=require("morgan")


Route.use(cors(),morgan('dev'))

Route.get('/',(req,res)=>{

    try {
        return res.send("Recibido")
    } catch (error) {
        

        return res.sendStatus(500).json({message:error.message})
    }
})


module.exports=Route;