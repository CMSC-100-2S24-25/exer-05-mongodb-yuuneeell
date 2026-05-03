// router.js
// JOYOSA, EUNEL JACOB C.
// CMSC 100 C-1L
// Description: This JS script serves as the router where endpoints of the web app are defined

// import functions from controller.js
import ctrlrFunctions from './controller.js';

const router = (app) => {
    app.get('/', ctrlrFunctions.homepage);
    app.post('/save-student', ctrlrFunctions.saveStudent);
    app.post('/update', ctrlrFunctions.updateStudent);
    app.post('/remove-user', ctrlrFunctions.removeUser);
    app.post('/remove-all-user', ctrlrFunctions.purgeDatabase);
    app.get('/user', ctrlrFunctions.getUserData);
    app.get('/members', ctrlrFunctions.getAllMembers);
}

export default router;