// consumir Api
    function traerNombre(){
    const url = `http://127.0.0.1:5000/api/yancy`

    fetch(url)
    .then(res => {return res.json()})
    .then(data => console.log(data))
    }

// función input
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
    },
    ]

    function register(){
       
        let nombre = document.getElementById('nombre').value;

    
            for(let user of BD){
                if(nombre === user.name){
                    return console.log("Existe");
                }
                 
            }
      
        
        return alert('El usuario no existe')
    }  
    
