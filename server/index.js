let express = require('express');
let bodyParser = require('body-parser');
let db = require('../database-mysql');
let session = require('express-session');
require('dotenv').config();
// let requestHelpers = require('../helpers.js') // to implement from Shannon
let serverHelpers = require('../lib/serverHelpers.js') 
let app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(session({
  secret: process.env.SESSION_PASSWORD,
  resave: true,
  saveUninitialized: true
}));

///// MAIN PAGE REQUESTS /////
app.get('/', function(req, res) {
  // will render index page regardless of logged in or not 
  // but only those logged in will be able to create/save
  res.render('index');
});

app.get('/candidates/:id', function(req, res) {
  // retreive candidate information from DB
  db.getCandidateById(function(err, data) {
    if(err) {
      console.log('Error finding candidate');
      res.status(500).end();
    } else {
      console.log('Successfully retreived candidate');
      res.status(200).send(JSON.stringify(data));
    }
  });
});

// a post request adds to the list of candidates 
// or should this be a request to the API??
app.post('/candidates', function(req, res) {
  // receives post request upon new candidate form submission
  // parse out all of the information from the req.body
  // check if that candidate exists in the database

  // save to the database
  // res.status(201).end()

});

app.get('/events/:id', function(req, res) {
  // retreive event information from DB
  db.getEventById(function (err, data) {
    if (err) {
      console.log('Error finding event');
      res.status(500).end();
    } else {
      console.log('Successfully retreived event');
      res.status(200).send(JSON.stringify(data));
    }
  });
});

// a post request adds to the list of events
// or should this be a request to the API??
app.post('/events', function(req, res) {
  // find event data based on passed id
});


///// USER-RELATED REQUESTS /////
app.get('/login', function(req, res) {
  // render login page
});

app.post('/login', function(req, res) {
  // grab username and password from req
  let username = req.body.username;
  let password = req.body.password;
  // check if username exists
  // is this still relevant if using passport??
  requestHelpers.CheckIfUserExists(function(err, user) {
    // if those match
    if (user) {
      // check that users stored password against the hashed version of the user input plain password
      // check using passport??
      // if passwords match
        // clear any session that might exist
        //req.session.destroy()
        // set the session to the current user
        //req.sesion.user = user;
        // redirect to index page
        //res.status(201).redirect('/');
      // else 
        // console.log("That password and/or email combination was unsuccessful. Please try again.");
        // res.status(302).redirect('login')
    } else { // if no user was found
      // redirect to login page
    }
  });
});

app.get('/signup', function(req, res) {
 // render signup page
});

app.post('/signup', function(req, res) {
  // check if username (and email??) exists
    // if not,
      // hash password
      // save that user information (name, username, email, hashedPassword, bio?, etc.)
      // set the session id to the current user
      // redirect to the index page
    // if so
      // console.log('That username already exists, please try again')
});

app.post('/logout', function(req, res) {
  // terminate session id
  // redirect to login page
});


let port = 3000
app.listen(port, function() {
  console.log(`The server is listening on port ${ port }!`);
});
