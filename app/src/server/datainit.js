var mongoose = require('mongoose'),
	dbname = "smellclean";

var Product = mongoose.model("Product", {
	id: String,
	name: String,
	size: String,
	price: Number,
	category: String,
	image: String,
	description: String
});

var Category = mongoose.model("Category", {
	category: String
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);
db.once("open", deleteCategories);

function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts();
	});
}

function deleteCategories(){
	Category.remove({}, function(err){
		if(err) console.log(err);
		insertCategories();
	});
}

function insertProducts(){

	Product.create(
		{
			"id": "rain-60-ml",
			"name": "CLEAN - Rain Eau De Parfum",
			"size": "60 ml",
			"price": 560,
			"category": "Rain",
			"image": "img/cleanrain60ml.jpg",
			"description": "Har en forfriskende ren duft af en mild regnvejrsdag og blomsterblade. Alle Clean produkter er 100% fri for parabener, sulfater, talkum. aluminiumchlorid, propylenglycol, kunstige farver/tilsætningsstoffer, mineralske olier og animalske ingredienser og er ikke testet på dyr. "
		},
		{
			"id": "original-60-ml",
			"name": "CLEAN - Original Eau De Parfum",
			"size": "60 ml",
			"price": 560,
			"category": "Like a Original",
			"image": "img/cleanoriginal60ml.jpg",
			"description": "CLEAN - Original - Eau de Parfum. En naturlig duft af renhed. CLEAN - Original - Eau de Parfum. En skøn parfume, der dufte som var du lige trådt ud af badet. Giver en naturlig duft af renhed. "
		},
		{
			"id": "original-30-ml",
			"name": "CLEAN - Original Eau De Parfum",
			"size": "30 ml",
			"price": 375,
			"category": "Like a Original",
			"image": "img/cleanoriginal30ml.jpg",
			"description": "CLEAN - Original - Eau de Parfum. En naturlig duft af renhed. CLEAN - Original - Eau de Parfum. En skøn parfume, der dufte som var du lige trådt ud af badet. Giver en naturlig duft af renhed. "
		},
		{
			"id": "fresh-laundry-60-ml",
			"name": "CLEAN - Fresh Laundry Eau De Parfum",
			"size": "60 ml",
			"price": 560,
			"category": "Fresh Laundry",
			"image": "img/cleanfreshlaundry60ml.jpg",
			"description": "CLEAN - Fresh Laundry - Eau de Parfum er en skøn, ren duft der leder tankerne hen på nyvasket tøj. CLEAN - Fresh Laundry - Eau de Parfum er en skøn, ren duft der leder tankerne hen på nyvasket tøj. Indeholder noter af Brasiliansk Appelsin, Hvid Jasmin og Mexikansk Lime."
		},
		{
			"id": "shower-fresh-30-ml",
			"name": "CLEAN - Shower Fresh Eau De Parfum",
			"size": "30 ml",
			"price": 375,
			"category": "Shower Fresh",
			"image": "img/cleanshowerfresh30ml.jpg",
			"description": "CLEAN - Shower Fresh - Eau de Parfum er en enkelt, sød duft, der får dig til at dufte som om du lige er kommet ud af badet. CLEAN - Shower Fresh - Eau de Parfum er en enkelt, sød duft, der får dig til at dufte som om du lige er kommet ud af badet. Indeholder noter af citrus, mandarin og jasmin."
		},
		{
			"id": "men-30-ml",
			"name": "CLEAN - Men Eau De Toilette",
			"size": "30 ml",
			"price": 375,
			"category": "Like a Man!",
			"image": "img/cleanmen30ml.jpg",
			"description": "CLEAN - Men - Eau de Toilette. En naturlig duft af renhed - som var du lige trådt ud af badet. CLEAN - Men - Eau de Toilette. En naturlig duft af renhed - som var du lige trådt ud af badet. Indeholder noter af rød grapefrugt, lavendel og musk. "
		},
		{
			"id": "warm-cotton-60-ml",
			"name": "CLEAN - Warm Cotton Eau De Parfum",
			"size": "60 ml",
			"price": 560,
			"category": "Like Warm Cotton",
			"image": "img/cleanwarmcotton60ml.jpg",
			"description": "CLEAN - Warm Cotton - Eau de Parfum er en frisk, behagelig duft, der leder tankerne hen på duften af tøj der lige er kommet ud af tørretumbleren. CLEAN - Warm Cotton - Eau de Parfum er en frisk, behagelig duft, der leder tankerne hen på duften af tøj der lige er kommet ud af tørretumbleren. Indeholder duftnoter af citrus, jasmin og pære.  "
		},
		{
			"id": "warmcotton-gift",
			"name": "CLEAN - Warm Cotton Gift Set",
			"size": "Set",
			"price": 755,
			"category": "Like Warm Cotton",
			"image": "img/warmcottongift.jpg",
			"description": "Den ideelle gave der indeholder: 1 CLEAN Warm Cotton EdP 60 ml, 1 Warm Cotton body lotion 177 ml og 1 Shower Gel 177 ml. Denne gaveæske indeholder 3 produkter fra Warm Cotton serien, og er en perfekt gave til en du holder af. Sættet indeholder: CLEAN Warm Cotton EdP 60 ml, Warm Cotton body lotion 177 ml, Shower Gel 177 ml."
		},
		{
			"id": "clean-classics",
			"name": "CLEAN - Classics Set",
			"size": "3 x 30 ml",
			"price": 1225,
			"category": "Like Warm Cotton",
			"image": "img/cleanclassics.png",
			"description": "hej"
		}
	);
}

function insertCategories(){

	Category.create(
		{
			"category": "Like a Man!"
		},
		{
			"category": "Rain"
		},
		{
			"category": "Shower Fresh"
		},
		{
			"category": "Like Warm Cotton"
		},
		{
			"category": "Like a Original"
		},
		{
			"category": "Fresh Laundry"
		}
	);
}