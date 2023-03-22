const routes = require("express").Router(); // usando somente o método Router() para criar nossar rotas.
const TaskController = require("../controller/TaskController"); // definda aqui para que eu traga o métodogetAll.

routes.get("/", TaskController.getAllTasks); // Rota p/ buscar todas as tarefas da lista pelo método getAllTasks.
routes.post("/create", TaskController.createTask); // criando a rota para criar a lista de tarefas metodo POST createTask.
routes.get("/getById/:id/:method", TaskController.getById); // Rota p/ pegar item da lista pelo "id"pelo método getById. 
routes.post("/updateOne/:id", TaskController.updateOneTask); // Rota para editar uma tarefa pelo método updateOneTask.
routes.get("/deleteOne/:id", TaskController.deleteOneTask); // Rota para deletar(apagar uma tarefa) pelo método deleteOneTask.
routes.get("/check/:id", TaskController.taskCheck);

module.exports = routes; // aqui estou exportando as rotas para serem usadas em outros lugares.