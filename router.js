// router.js
// JOYOSA, EUNEL JACOB C.
// CMSC 100 C-1L
// Description: This JS script serves as the router where endpoints of the web app are defined

// import functions from controller.js
import { homepage, findStudents, findSubjectsPost } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/find-students', findStudents)
    app.post('/find-student-post', findSubjectsPost)
}

export default router;