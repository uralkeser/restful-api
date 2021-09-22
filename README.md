# Simple RESTful API
Built simple RESTful Api with using Node.js, Express, MongoDB and Mongoose.

## Before Get Started
According to privacy issues this repo does not contain MongoDB credentials. So that MongoDB credentials must be provided manually as a file named db_config.js under the folder config. On your db_config file write your URL in given form below.
```js
module.export = {
    URL: [your URL]
};
```
The standard URI connection scheme has the form:
```
mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```
## Tech
- [node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) 
- [Mongoose](https://mongoosejs.com/)

## Installation
Open your Terminal and run these commands.

Install the dependencies and devDependencies 
```bash
npm install
```
Start the server.
```bash
npm start
```

## License

MIT


