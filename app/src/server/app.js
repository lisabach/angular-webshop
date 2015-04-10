var express = require("express"),
	routes = require("./controllers"),
	path = require('path'),
	mongoose = require("mongoose"),
	bodyParser = require('body-parser'),
	dbname = "smellclean";

//express setup
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));

//routes setup
var router = express.Router();
var product = require('./controllers/api/product');
var category = require('./controllers/api/category');
var order = require('./controllers/api/order');


//get all products
router.get('/api/products', product.getAll); //api'en getALL

//Get all categories
router.get('/api/categories', category.getAll);

//Get all orders
router.get('/api/orders', order.getAll);


//create product
router.post('/api/product', product.create); 

//create order
router.post('/api/order', order.create);


//get product
//update product
//delete product
router.route('/api/product/:id')
	.get(product.read) 
	.put(product.update)
	.delete(product.delete);

//get order
//delete order
router.route('/api/order/:id')
	.get(order.read)
	.delete(order.delete);

//registrer routing
app.use('/', router);

//mongoose and mongodb setup
mongoose.connect("mongodb://localhost/" + dbname);

var db = mongoose.connection;
db.on("error", console.error);
/* db.once("open", function(callback){
 	console.log("MongoDB connection gogo to " + dbname);
 }); */
db.once('open', startServer);

//routes
/* app.get("/ok", routes.index);
app.get("/products", routes.products);
app.get("/product/:id", products.read); */

function startServer(){
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log("Listening on port " + port);
	})
}

//
 