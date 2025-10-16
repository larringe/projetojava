const express = require('express')
const app = express()
const cors = require ('cors')
app.use(express.json())
app.use(cors())

//endpoint para atender um get oi: http://localhost:3000/oi
app.get('/oi', (req, resp) => {resp.send('oi')})

//endpoint para atender um get filmes: http://localhost:3000/filmes
app.get('/filmes', (req, res) => {res.send(filmes)})

//cadastrar um novo filme: post filme: http://localhost:3000/filmes
app.post('/filmes', (req, res) => { 
    //montar um objeto json filme com as informacoes recebidas
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    const filme = {titulo: titulo, sinopse: sinopse}
    //inserir um novo filme na base filmes, NA MEMORIA
    filmes.push(filme)
    //so para verificar: envia a base atualizada
    res.send(filmes)
})

let filmes = [
  {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse:
      "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções.",
  },
  {
    titulo: "Um Sonho de Liberdade",
    sinopse:
      "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela",
  },
];

app.listen(3000, () => console.log('server up e running'))