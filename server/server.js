const express = require('express');
const bodyParser = require('body-parser');
// const index = require('./routes/index');
// const movies = require('./routes/movies'); 
 // var addmovie=require('./addmovie.html')
const path = require('path');
// app.set('template', __dirname + '/templates');


const app = express();
let port = process.env.PORT || 3000 


app.use(express.static(__dirname +'/../client/')); 


// app.set('views', __dirname + '/../clients')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.get('/', function(req,res){
// 	res.render(addmovie)
// }); 
// app.use('/api', movies); 
//Starts our server
app.listen(port, function() {
  console.log(' successfully connected to port: ', port);
});