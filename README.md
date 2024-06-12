# FindUkrainian

An SPA to locate Ukrainian businesses in Koln, Germany

## Room for improvement:
1. I used this as a quick fix for a translation feature while having troubles with various translation APIs, hid the ugly parts that googleTranslateElement adds to the page with css, put the script loading in a separate js file, and bound the translate func to the button in the Header.jsx. But it stopped working! https://www.w3schools.com/howto/howto_google_translate.asp
2. BusinessDetail Page could use a carousel with images (db has an array of image urls)
3. No media query for mobile yet
4. Reviews and user btn are fake)) Reviews issue can be solved by creating a separate collection in the db for users and reviews, and relate them with ids.
5. User auth would be nice to implement

### Prerequisites:

You will need Express server and MongoDB to run this project.

Server port can be specified in the `server/index.js` file, defaults to 3000. If your server doesn't run on port 3000, you need to specify it in `client/src/services/businessService.js` file.

MongoDB connection string is to be specified in `server/models/index.js` file.

Install all dependencies. Server and client are two separate projects that need their respective packages to be installed via npm

Dependencies for _server_:

```
from the root directory:

cd server
npm i
```

Dependencies for _client_:

```
from the root directory:

cd client
npm i
```

### run commands:

To run the _server_ and seed it with mocked data:

```
from the root directory:

cd server
npm run seed
node run index.js

```

To run the _client_:

```
from the root directory:

cd client
npm run dev
```
