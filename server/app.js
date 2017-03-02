var express = require('express'),
	path = require('path'),
	app = express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

var logins =[{username: "kate" , password: "soccer" }]

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(request, response){
	response.render('home');
});


app.post('/logins', function(request, response){
	// console.log(request.body.username);
	console.log(request.body.password);
var info ={username: request.body.username , password:request.body.password }
	logins.push(info);
	response.render('home', {loginsArray: logins});
	console.log(logins);
	console.log(info);
}) 

server.listen(3000, function(){
	console.log('server is listening!')
})
