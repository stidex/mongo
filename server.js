
const express = require('express');
const path = require('path');
var mongoose = require('mongoose');


const app = express();
const router = express.Router;
const indexRoutes = require('./roules/index')
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use('/', indexRoutes);



mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://steven:12345@cluster0.hyauo.mongodb.net/prueba?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log('conexión con mongo realizada con exito');

  app.listen(port, () => {
    console.log(`Server listening on localhost: ${port} `);
  });
})

