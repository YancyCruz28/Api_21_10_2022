const express = require ("express")
const app = express()
const port = 5000

let BD = [
    {
        name:"Yancy",
        lastname: "Arias",
        mail: "yancy@mail.com",
        tel: "2134646",
        alive: "true"
    },
    {
        name:"Oscar",
        lastname: "Sarmiento",
        mail: "osarmiento@mail.com",
        tel: "7473848",
        alive: "true"
    },
    {
        name:"Diana",
        lastname: "Cruz",
        mail: "dcruz@mail.com",
        tel: "98848343",
        alive: "false"
    }
    ]

app.get('/api/yancy', (req, res) => res.status(200).json({message: `Hola ${users[2].name}, como estas?`})),

   
app.listen(port, () => console.log(`Escuchando el puerto ${5000}`))