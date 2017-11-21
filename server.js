var express             = require('express'),
    app                 = express(),
    passport            = require('passport'),
    FacebookStrategy    = require('passport-facebook').Strategy,
    session             = require('express-session');

var facebookAuth = {
      'clientID'        : '', // facebook App ID
      'clientSecret'    : '', // facebook App Secret
      'callbackURL'     : 'http://localhost:8099/auth/facebook/callback'
};

var user = {};  // user object to be put in session
// passport needs ability to serialize and unserialize users out of session
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (id, done) {
    done(null, user);
});

// passport facebook strategy
passport.use(new FacebookStrategy({
    "clientID"        : facebookAuth.clientID,
    "clientSecret"    : facebookAuth.clientSecret,
    "callbackURL"     : facebookAuth.callbackURL
  },  
  function (token, refreshToken, profile, done) {
    console.log("Facebook Profile: " + JSON.stringify(profile));
    user = {};
    user['id'] = profile.id;
    user['name'] = profile.displayName;
    console.log('user object: ' + JSON.stringify(user));
    return done(null,user);  // put user object into session
  })
);

app.set('view engine', 'ejs');

// initialize passposrt and and session for persistent login sessions
app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: true,
    saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

// home page
app.get("/", isLoggedIn, function (req, res) {
    res.send('Hello, ' + req.user.name + '!');
});

// login page
app.get("/login", function (req, res) {
    res.send("<a href='/auth/facebook'>login through facebook</a>");
});

// send to facebook to do the authentication
app.get("/auth/facebook", passport.authenticate("facebook", { scope : "email" }));
// handle the callback after facebook has authenticated the user
app.get("/auth/facebook/callback",
    passport.authenticate("facebook", {
        successRedirect : "/content",
        failureRedirect : "/"
}));

// content page, it calls the isLoggedIn function defined above first
// if the user is logged in, then proceed to the request handler function,
// else the isLoggedIn will send 401 status instead
app.get("/content", isLoggedIn, function (req, res) {
    res.send("Welcome, " + req.user.name +
             "!  You have successfully logged in");
});

// logout request handler, passport attaches a logout() function to the req object,
// and we call this to logout the user, same as destroying the data in the session.
app.get("/logout", function(req, res) {
    req.logout();
    res.send("logout was successful!");
});

// launch the app
app.listen(process.env.PORT || 8099);
console.log("App running at localhost:8099");
