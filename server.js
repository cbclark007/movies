const express = require('express');
const hbs = require('hbs');
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/movieInfo', (req, res) => {
  const title = req.query.title;
  const apiKey = process.env.API_KEY;
  console.log(apiKey);
  axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
    .then((response) => {
      const poster = response.data.Poster;
      res.send({poster});
    })
    .catch((response) => {
      console.log(response);
      res.send({});
    });
  //end of axios

})

app.listen(port, () => {
  console.log("Server is up on 3000")
})


//mongod.exe --dbpath C:\Users\PTC-Student-38\mongo-data
//killall mongod
