//esta e a conexao com o banco
// 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require ("dotenv")
//require ("dotenv").configure() pode ser escrito dessa forma
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())


const filme = mongoose.model("Filme", mongoose.Schema({
  titulo: {type: string}, 
  sinopse: {type : string}
  
}))

//endpoint para atender um get oi: http://localhost:3000/oi
app.get('/oi', (req, res) => {
    res.send('oi')
})

//funcao de conexao com o banco
async function conectarAoMongoDB (){
  await mongoose.connect('mongodb+srv://larissaoliv_db_user:<28052007>projetojava.w137caz.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoJava')
}



//endpoint para atender um get filmes: http://localhost:3000/filmes
app.get('/filmes', (req, res) => {
    res.send(filmes)
})

//cadastrar um novo filme: post filmes: http://localhost:3000/filmes
app.post('/filmes', async (req, res) => {
  //buscar o que o usuario digitou
    //montar um objeto json filme com as informações recebidas
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    const filme = {titulo: titulo, sinopse: sinopse}
    //inserir o novo filme na base filmes, NA MEMÓÓÓRIA
    filme.save()
    filme.find()
    const filmes = await filme.find() 
    filmes.push(filme)
    //só para verificar: envia a base atualizada
    res.send(filmes)
})

const stringConexao = process.env.CONEXAO_BD;

async function conectarAoMongo() {
  await mongoose.connect(stringConexao)

  
}


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


app.listen(3000, () => {
  try {
    conectarAoMongoDB()
    console.log('server up & running & conexao ok')
  }
  catch (e) {
    console.log("erro:" + e)
  }
    }
)