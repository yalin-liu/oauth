# COMPS381F - Passport, OAuth Middleware for Node.js [Reference]

1. Create a Facebook App at [developer.facebook.com](https://developer.facebook.com) to obtain an **App ID** and **App Secret**

![Create a Facebook App](https://github.com/raymondwcs/oauth/blob/master/fb00.png title="Create a Facebook App")

2. Configure your newly created Facebook App

![Configure your Facebook App](https://github.com/raymondwcs/oauth/blob/master/fb00.png title="Configure your Facebook App")

3. Put your App ID and App Secret into the `facebookAuth` variable
```
var facebookAuth = {
      'clientID'        : '', // facebook App ID
      'clientSecret'    : '', // facebook App Secret
      'callbackURL'     : 'http://localhost:8099/auth/facebook/callback'
};
```
   Remember to update `callbackURL` if your server is running in the cloud!

Documentation of Passport can be found [here](http://www.passportjs.org).
