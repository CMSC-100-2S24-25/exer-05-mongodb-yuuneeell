// server.js
// JOYOSA, EUNEL JACOB C.
// CMSC 100 C-1L
// Description: This JS script contains the necessary code in order to run the web server

// import modules
import express from 'express';
import router from './router.js';

// setup the server and added parser to read incoming requests
const app = express();

// Below acts as a plugin in order to read JSON contents of incoming request messages
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

app.listen(3000, () => { console.log('Server started at port 3000') });