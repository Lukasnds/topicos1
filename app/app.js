import express from 'express'
import routes from './routes'
import Database from '../cfg/database/database'

class App {
    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
        this.db;
        this.database();
    }

    middleware(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(routes);
    }

    database(){
        this.db = Database;
    }
}

export default new App().app