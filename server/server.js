
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const entriesRouter = require('./routes/entries.router');
const entryRouter = require('./routes/entry.router');
const emotionsRouter = require('./routes/emotions.router');
const secondaryEmotionsRouter = require('./routes/secondary.emotions.router');
const tertiaryEmotionsRouter = require('./routes/tertiary.emotions.router');
const entryDetailsRouter = require('./routes/entry.details.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/entries', entriesRouter);
app.use('/api/entry', entryRouter);
app.use('/api/emotions', emotionsRouter);
app.use('/api/emotions2', secondaryEmotionsRouter);
app.use('/api/emotions3', tertiaryEmotionsRouter);
app.use('/api/details', entryDetailsRouter);

// Serve static files
app.use(express.static('build')); 
// app.use(express.static('public'));


// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
