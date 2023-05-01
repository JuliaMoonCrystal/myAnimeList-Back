const express = require('express');
const app = express();


const homeController = require('./src/controllers/homeController');

app.get('/home', homeController.home);
// homeController.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/post', function (req, res) {
    res.send('Got a POST request');
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
})  