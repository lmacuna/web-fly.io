
const postForm=(req,res)=>{
    try {
        var {nombre,email,asunto,mensaje}=req.body

        console.log(req.body)
        var data="Formulario recibido"
        return res.json({"data":data})

    } catch (error) {

        return res.sendStatus(500)
        
    }
}



module.exports={postForm}