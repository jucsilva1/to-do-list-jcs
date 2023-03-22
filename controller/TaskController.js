const Task = require('../models/Task'); // para usar na create tenho de importar a minha model Task.js

let message = "";
let type = "";

const getAllTasks = async (req, res) => { // não esquecer de exportar logo abaixo e criar a rota
    try {
      setTimeout(() =>{
        message = "";
      }, 1000);  
      const tasksList = await Task.find(); // await usado p/ esperar pegar a lista no BD e trazer então usa render.
      return res.render("index", {
        tasksList, 
        task: null, 
        taskDelete: null,
        message,
        type
    });
    } catch (err) {
       res.status(500).send({error: err.message}); // se não conseguir trará resposta em forma de erro(500)
    }
}; // Método separado da Rota onde será exportado para Pasta routes.

const  createTask = async (req, res) => { // não esquecer de exportar logo abaixo e criar a rota
    const task = req.body; // trará os dados pelo body.

    if(!task.task) {
        message = "Insira um texto, antes de adicionar a tarefa!"
        type = "danger"
        return res.redirect("/"); // se não localizar nenhuma task irá redirecionar para a rota "/"
    } 

    try {
        await Task.create(task); // (task) esta que veio pelo Body
        message = "Tarefa criada com sucesso!"
        type = "success"
        return res.redirect("/"); // se deu certo irá redirecionar para a rota "/" 
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const getById = async (req, res) => {
    try {
        const tasksList = await Task.find(); // precisaremos do Task.find para depois poder renderizar abaixo a resposta.
        if(req.params.method == "update") {
            const task = await Task.findOne({ _id: req.params.id }); // (Task-vem da model) "_id" vem do ATLAS  e req.params está vindo do cliente(Body)
            res.render("index", { task, taskDelete: null, tasksList, message, type }); // variáveis em formato de objeto.
        } else {
            const taskDelete = await Task.findOne({ _id: req.params.id }); // (Task-vem da model) "_id" vem do ATLAS  e req.params está vindo do cliente(Body)
            res.render("index", { task: null, taskDelete, tasksList, message, type }); // vairáveis em formato de objeto.
        }
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const updateOneTask = async (req, res) => { // não esquecer de exportar logo abaixo e criar a rota
    try {
        const task = req.body;
        await Task.updateOne({ _id: req.params.id}, task);
        message = "Tarefa atualizada com sucesso!"
        type = "success"
        res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const deleteOneTask = async (req, res) => { // não esquecer de exportar logo abaixo e criar a rota
    try {
        await Task.deleteOne({ _id: req.params.id});
        message = "Tarefa apagada com sucesso!"
        type = "success"
        res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const taskCheck = async (req, res) => { // não esquecer de exportar logo abaixo e criar a rota 
    try {   
        const task = await Task.findOne({ _id: req.params.id });
               
        task.check ? task.check = false : task.check = true; // Condicional com if ternário
      
       // Condicional com if normal mesmo resultado do código acima
       // if (task.check) {
       //   task.check = false;
       //} else {
       //  task.check = true;
       // }
        
        await Task.updateOne({ _id: req.params.id}, task);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask,
    taskCheck,
};