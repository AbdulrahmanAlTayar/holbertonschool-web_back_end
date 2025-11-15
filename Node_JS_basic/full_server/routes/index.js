import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

function setupRoutes(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default setupRoutes;
