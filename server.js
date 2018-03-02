const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000, ()=>{
  console.log("Server is up on 3000")
})
