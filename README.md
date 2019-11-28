# COMPS381F - Passport, OAuth Middleware for Node.js [Reference]

1. Create a Facebook App at [developer.facebook.com](https://developer.facebook.com) to obtain an **App ID** and **App Secret**

![Create a Facebook App](https://github.com/raymondwcs/oauth/blob/master/fb00.png)

2. Configure your newly created Facebook App.  Use the URL below as **Valid OAuth redirect URIs**

   ```
   http://localhost:8099/auth/facebook/callback
   ```

![Configure your Facebook App](https://github.com/raymondwcs/oauth/blob/master/fb02.png)

3. Put your App ID and App Secret into the `facebookAuth` variable

![Configure your Facebook App](https://github.com/raymondwcs/oauth/blob/master/fb03.png)

   ```
   var facebookAuth = {
      'clientID'        : '', // facebook App ID
      'clientSecret'    : '', // facebook App Secret
      'callbackURL'     : 'http://localhost:8099/auth/facebook/callback' 
   };
   ```

**Remember to update `callbackURL` when your server is running in the cloud!**

Documentation of Passport can be found [here](http://www.passportjs.org).
