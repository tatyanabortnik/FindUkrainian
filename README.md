<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tatyanabortnik/FindUkrainian">
    <img src="client/public/logo.png" alt="Logo" height="80">
  </a>
</div>

## About The Project

FindUkrainian is an SPA to locate Ukrainian businesses in Koln, Germany

![FindUkrainian Screen Shot][product-screenshot]

### Built With

[![React][React]][React_URL]
[![Leaflet][Leaflet]][Leaflet_URL]
[![React_Router][React_Router]][React_Router_URL]
[![MongoDB][MongoDB]][MongoDB_URL]
[![Expressjs][Expressjs]][Expressjs_URL]
[![MUI][MUI]][MUI_URL]
[![Figma][Figma]][Figma_URL]
[![Prettier][Prettier]](https://prettier.io/)

### Prerequisites

- npm - ([Link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- MongoDB [database](https://www.mongodb.com/docs/manual/administration/install-community/)

You will need to install MongoDB to run this project.

Server port is stated in the `server/index.js` file, defaults to 3000. If your server doesn't run on port 3000, you need to also specify it in `client/src/services/businessService.js` file.

### Installation:

1. Install the dependencies for client and server side via npm:

```
from the root directory:

npm i
npm run install:all
```

2. Create a .env file in server folder, then copy and paste the contents of .env.template file there.

3. Seed the database:

```
from the root directory:

npm run seed
```

4. Start client and server in dev mode:

```
from the root directory:

npm run start:all
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
[Leaflet]: https://a11ybadges.com/badge?logo=leaflet
[Leaflet_URL]: https://leafletjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB_URL]: https://www.mongodb.com/docs/
[React]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React_URL]: https://react.dev/
[React_Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React_Router_URL]: https://www.npmjs.com/package/react-router-dom
[Expressjs]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Expressjs_URL]: https://expressjs.com/
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI_URL]: https://mui.com/
[Figma]: https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
[Figma_URL]: https://www.figma.com/
