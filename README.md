<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tatyanabortnik/FindUkrainian">
    <img src="client/public/logo.png" alt="Logo" height="80">
  </a>

<h3 align="center">FindUkrainian</h3>

## About The Project

![FindUkrainian Screen Shot][product-screenshot]

An SPA to locate Ukrainian businesses in Koln, Germany

### Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
[![Prettier][Prettier]](https://prettier.io/)

### Prerequisites

- npm - ([Link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- MongoDB [database](https://www.mongodb.com/docs/manual/administration/install-community/)

### Installation:

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

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Tetiana Bortnyk - tatyanabortnik@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: client/public/image-1.png
[Prettier]: https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E
