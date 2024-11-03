# Coffee-app 
This application was developed to learn <a href="https://reactnative.dev/">`React-Native`</a> as practice to learn mobile app development.

<div align=center>
    <img  src="https://res.cloudinary.com/domvgm4cs/image/upload/v1730670446/app_suykjy.png">
</div>

<div align=center>
    <img  src="https://res.cloudinary.com/domvgm4cs/image/upload/v1730670711/app3_ve7bu2.png">
</div>

## 1. Setup

First, we have to install all packages in the main folder, we run:

- `npm install`

- `cd front;npm install`

The first command will install the backend packages and the second will install all frontend packages.

In the main folder you have to create `.env` file and put your variables as:
- `PORT = 3000`
- `MONGO_DB_URL= {your MongoDB key}`
- `NODE_ENV = development`

To run the app you can run the following command in the main directory:

- `npm start server`
- then open another teminal and run the following command
- `cd front;npx expo start -c`

## 2. Stack / external libraries

The base stack of the app is (Mongoose, Express, React-Native (<a href="https://expo.dev/">`expo`</a>), Node). Next to that we make use of the following extras:

### 2.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

### 2.2 Client-side libraries
- `nativewind` || for styling. See [docs](https://www.nativewind.dev/)
- `zustand` || To manage states of our components. See [docs](https://github.com/pmndrs/zustand)

### 2.3 Server-side libraries
- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)
- `express` || To run the backend. See [docs](https://expressjs.com/)