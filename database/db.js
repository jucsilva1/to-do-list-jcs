const mongoose = require('mongoose');

// criando a função de conexão com BD MongoDB ATLAS no caso.
const connectToDb = () => {
    mongoose.connect(
        process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("MongoDB Atlas CONECTADO!") // sem chaves para ficar em linha única
    ).catch((err) => console.log(err)) // sem chaves para ficar em linha única
};

module.exports = connectToDb; // exportando  módulo criado connectDb p/ ser usada em qualquer lugar do programa.