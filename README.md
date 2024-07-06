# FindUkrainian

An SPA to locate Ukrainian businesses in Koln, Germany

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
