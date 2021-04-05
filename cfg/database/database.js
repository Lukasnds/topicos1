var mongoose = require('mongoose');

class Database {
    constructor()  {
        this.mongoose = mongoose;
        this.mongoDBUri = "mongodb+srv://lukasnds:topicos@cluster0.zu1cm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        this.db;
        this.connect();
    }

    async connect(){
        this.mongoose.connect(this.mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });

        this.db = mongoose.connection;

        this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
};

export default new Database();

