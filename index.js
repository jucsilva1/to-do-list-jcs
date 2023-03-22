require ('dotenv').config();
const express = require("express"); // Chamando a biblioteca express de dentro da pasta node_modules
const path = require("path");
const routes = require("./routes/routes"); // trás as rotas da pasta Routes.
const connectToDb = require("./database/db"); // trás a conexão criada da pasta database db.js ( função connectTodo)

connectToDb(); // executando a função importada acima connectToDo 
const app = express();

//const port = 3000 // definindo a porta usada projeto localhost
const port = process.env.PORT; // a porta vem do .env 

app.set("view engine", "ejs"); // definindo a view engine de extensão ejs para rodar o res.render("index") 
app.use(express.static(path.join(__dirname, "public"))); // Conect .pasta atual ao a pasta public(arq.estaticos)
app.use(express.urlencoded()); // aqui o servidor Index.js irá conseguir ler os arquivos FORM pelo Body vindo do meu Index.ejs.
app.use(routes); // Aqui definindo para que ele possa usar as rotas

//Rota e método usada pelo GET
//app.get('/home', (req, res) => {
   // res.send('Olá Mundo!')//padrão  Olá Mundo dentro do backend
    //res.render("index"); // render irá buscar dentro da Pasta Views o index.ejs o Olá Mundo dela 
//});

// Escutando a porta escolhida e retornando status do servidor
app.listen(port, () => console.log(`Exemplo de App rodando na porta ${port}`));