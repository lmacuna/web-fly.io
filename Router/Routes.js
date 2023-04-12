const Route=require("express").Router()
const cors=require("cors")

const morgan=require("morgan")
const multer=require("multer")



const { postForm } = require("../Controllers/contacto.controller")


const upload=multer()

const corsConfig = {
    credentials: true,
    origin: true,
};
Route.use(cors(corsConfig))
Route.use(morgan('dev'))
Route.get('/',(req,res)=>{


    try {
        return res.send("Recibido")
    } catch (error) {
        

        return res.sendStatus(500).json({message:error.message})
    }
})


Route.post('/contact',upload.any(),postForm)


module.exports=Route;