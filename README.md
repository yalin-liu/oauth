# COMPS381F - Passport, OAuth Middleware for Node.js [Reference]

1. Create a Facebook App at [developer.facebook.com](developer.facebook.com) to obtain an **App ID** and **App Secret**
2. Put your App ID and App Secret into the `facebookAuth` variable
```
var facebookAuth = {
      'clientID'        : '', // facebook App ID
      'clientSecret'    : '', // facebook App Secret
      'callbackURL'     : 'http://localhost:8099/auth/facebook/callback'
};
```
   Remember to update `callbackURL` if your server is running in the cloud!

Documentation of Passport can be found [here](http://www.passportjs.org).
