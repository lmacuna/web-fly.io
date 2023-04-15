const nodemailer=require("nodemailer")



const postForm=(req,res)=>{
    try {
        
        var {nombre,email,asunto,mensaje}=req.body
         const enviarMail = async () => {
            const config = {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
               

                auth: {
                    user: 'lucasmacuna@gmail.com',
                    pass: 'iccjxonsdzgzpqyt'

                },
               /*  tls:{
                    rejectUnauthorized:false
                } */
            }

            const mensa = {
                from: 'lucas',
                to: 'lucasmacuna@gmail.com',
                subject: `${asunto}`,
                text: `De:${nombre}\nE-Mail:${email}\n\n${mensaje}`
            }

            const transport = nodemailer.createTransport(config)
            const info = await transport.sendMail(mensa)
            //console.log(info)
            data=`hola ${nombre}! He recibido satisfactoriamente tu mensaje, en breve me comunico contigo \n info: ${info}` 
            //data=req.body
               return res.json({"data":data})
        }

        enviarMail() 
        //console.log(req.body)
     
        
    } catch (error) {
        
        return res.sendStatus(500).json({message:error.message})
    }
}
 



module.exports={postForm}