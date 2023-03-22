const mongoose = require('mongoose');

const taskSchema =new mongoose.Schema({
    task: {
        type: String,
        required: true, // obrigatório
    },
    check: {
        type: Boolean,
        default: false, // inicia com o padrão false
    },
    date: {
        type: Date,
        default: Date.now(), // pegará data e hora de seu servidor Ex: se for USA será a data e hora de lá.
    },
});

module.exports = mongoose.model("task", taskSchema); // "Task", é só um apelido para exportar o real taskSchema.