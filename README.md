# custom-auth0-redirect
Sample code for custom OAuth2 connections with Auth0 redirect mode.

## Usage

1. Follow directions in this gist to set up Auth0 custom connection.

2. Run `npm install` to install dependencies.

3. In `public/lock.js`, enter your `auth0ClientId`, `auth0Domain` and `connectionName`.

4. In `src/app.js`, enter your Auth0 token URL and your application redirect URL.

5. Configure the Auth0 Client ID and Auth0 Secret in environment variables as `CUSTOMAUTH_AUTH0_CLIENTID` and `CUSTOMAUTH_AUTH0_SECRET`.

6. Run `npm start` to start the server and view `index.html` in your browser.
