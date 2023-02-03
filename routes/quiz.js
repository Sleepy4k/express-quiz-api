import * as QuizController from '../controllers/quiz';
import { Router } from 'express';

Router.get('/', QuizController.index);
Router.post('/store', QuizController.store);
Router.get('/:id', QuizController.show);
Router.put('/:id', QuizController.update);
Router.delete('/:id', QuizController.destroy);

Router.get('/category/:id', QuizController.categoryId);
Router.get('/level/:id', QuizController.levelId);

export default Router;
