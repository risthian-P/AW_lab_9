const express = require('express') //inportar la dependecia

const app = express() //crear una instancia

// Ruta raiz
app.get('/',(req,res)=>{
    res.send("Bienvenidos")
})

// Ruta información
app.get('/info',(req,res)=>{
    res.send(`<h1>Grupo 6</h1>`)
})

// Ruta integrantes
app.get('/integrantes',(req, res)=>{
    res.json(
        [{
            "Nombre":"Cristhian",
            "Apellido":"Pañora",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
          },{
            "Nombre":"Alan",
            "Apellido":"Perez",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
          },{
            "Nombre":"Ingrith",
            "Apellido":"Revelo",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            },{
            "Nombre":"Nataly",
            "Apellido":"Casillas",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            },{
            "Nombre":"Ariana",
            "Apellido":"Catani",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            },{
            "Nombre":"Dilan",
            "Apellido":"Obando",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            }]
    )
})

// Ruta productos
app.get('/productos',(req,res)=>{
    res.send(`

    <h1>Catálogo de repuestos de computadores, laptos e impresoras<h1/>
    <br>
    <h3>Computadoras<h3/>
    <li>Modelo
    <li>Marca
    <li>Memorias
    <li>Componentes
    <br><br/>
    <h3>Impresoras<h3/>
    <h3>Laptos<h3/>
    <h3>Sugerencias<h3/>
    `
    )
})

// Ruta erronea
app.use((req,res)=>{
    res.send("404 - Not found")
})

app.listen(3002) //Servidor en el puerto 3000
console.log("web server ejecutandose en el puerto 3002")

