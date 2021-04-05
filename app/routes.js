import { Router } from 'express'
import disciplinasController from '../app/disciplinas/controller/disciplinas'

const routes = new Router();

routes.get('/disciplinas', disciplinasController.get);

routes.post('/disciplinas', disciplinasController.post);

routes.put('/disciplinas/:codigo', disciplinasController.put);

routes.delete('/disciplinas/:codigo', disciplinasController.delete);

export default routes;