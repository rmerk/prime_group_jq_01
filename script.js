function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


var appleCurrentPrice = 100;
var appleCurrentInventory = 0;
var appleAveragePrice = 0;
var applePrices = [];
var orangeCurrentPrice = 100;
var orangeCurrentInventory = 0;
var orangeAveragePrice = 0;
var orangePrices = [];
var bananaCurrentPrice = 100;
var bananaCurrentInventory = 0;
var bananaAveragePrice = 0;
var bananaPrices = [];
var pearCurrentPrice = 100;
var pearCurrentInventory = 0;
var pearAveragePrice = 0;
var pearPrices = [];
var cashOnHand = 10000;


 // ALL PRICES ARE IN PENNIES

function updatePrice(fruitPrice, fruit) {
		// console.log(fruit + ": " + fruitPrice);

		// Up or Down 50
		var upOrDown = randomNumber(1,2);
		if (upOrDown == 1) {
			fruitPrice += randomNumber(1,50); 
		} else {
			fruitPrice -= randomNumber(1,50); 
		}
		if (fruitPrice < 50) {
			fruitPrice = 50;
		}
		if (fruitPrice > 999) {
			fruitPrice = 999;
		}
		// console.log(fruit + ": " + fruitPrice);
		return fruitPrice;
};


// var appleText = "Current Price: $" + (appleCurrentPrice / 100);

	$('.applePrice').text("Current Price: $" + (appleCurrentPrice / 100).toFixed(2));
	$('.orangePrice').text("Current Price: $" + (orangeCurrentPrice / 100).toFixed(2));
	$('.bananaPrice').text("Current Price: $" + (bananaCurrentPrice / 100).toFixed(2));
	$('.pearPrice').text("Current Price: $" + (pearCurrentPrice / 100).toFixed(2));
	$('.appleInv').text("Inventory: " + appleCurrentInventory);
	$('.orangeInv').text("Inventory: " + orangeCurrentInventory);
	$('.bananaInv').text("Inventory: " + bananaCurrentInventory);
	$('.pearInv').text("Inventory: " + pearCurrentInventory);

$(document).ready(function(){
	$('.cash').text((cashOnHand / 100).toFixed(2));

});



setInterval(function() {changePrices()}, 15000);



function changePrices() {

//console.log("A: " + appleCurrentPrice + " O: " + orangeCurrentPrice + " B: " + bananaCurrentPrice + " P: " + pearCurrentPrice)
appleCurrentPrice =  updatePrice(appleCurrentPrice, "apple");
orangeCurrentPrice = updatePrice(orangeCurrentPrice, "orange");
bananaCurrentPrice = updatePrice(bananaCurrentPrice, "banana");
pearCurrentPrice = updatePrice(pearCurrentPrice, "pear");

$('.applePrice').text("Current Price: $" + (appleCurrentPrice / 100).toFixed(2));
$('.orangePrice').text("Current Price: $" + (orangeCurrentPrice / 100).toFixed(2));
$('.bananaPrice').text("Current Price: $" + (bananaCurrentPrice / 100).toFixed(2));
$('.pearPrice').text("Current Price: $" + (pearCurrentPrice / 100).toFixed(2));

};

$('.buyApple').on("click", function() {
	appleCurrentInventory += 1;
	cashOnHand -= appleCurrentPrice; 
	applePrices.push(appleCurrentPrice);
	appleAveragePrice = calcAverage(applePrices, appleAveragePrice);
	$('.cash').text((cashOnHand / 100).toFixed(2));
	$('.appleInv').text("Inventory: " + appleCurrentInventory);
	$('.appleAvgPrice').text("Average Price: $" + (appleAveragePrice / 100).toFixed(2));
	// console.log(appleAveragePrice);
	// console.log(applePrices);
});


$('.buyOrange').on("click", function() {
	orangeCurrentInventory += 1;
	cashOnHand -= orangeCurrentPrice; 
	orangePrices.push(orangeCurrentPrice);
	orangeAveragePrice = calcAverage(orangePrices, orangeAveragePrice);
	$('.cash').text((cashOnHand / 100).toFixed(2));
	$('.orangeInv').text("Inventory: " + orangeCurrentInventory);
	$('.orangeAvgPrice').text("Average Price: $" + (orangeAveragePrice / 100).toFixed(2));
});


$('.buyBanana').on("click", function() {
	bananaCurrentInventory += 1;
	cashOnHand -= bananaCurrentPrice; 
	bananaPrices.push(bananaCurrentPrice);
	bananaAveragePrice = calcAverage(bananaPrices, bananaAveragePrice);
	$('.cash').text((cashOnHand / 100).toFixed(2));
	$('.bananaInv').text("Inventory: " + bananaCurrentInventory);
	$('.bananaAvgPrice').text("Average Price: $" + (bananaAveragePrice / 100).toFixed(2));
});


$('.buyPear').on("click", function() {
	pearCurrentInventory += 1;
	cashOnHand -= pearCurrentPrice; 
	pearPrices.push(pearCurrentPrice);
	pearAveragePrice = calcAverage(pearPrices, pearAveragePrice);
	$('.cash').text((cashOnHand / 100).toFixed(2));
	$('.pearInv').text("Inventory: " + pearCurrentInventory);
	$('.pearAvgPrice').text("Average Price: $" + (pearAveragePrice / 100).toFixed(2));
});



function calcAverage (pricesArray, fruitToAvg) {

fruitToAvg = 0;

for (var i = 0; i < pricesArray.length; i++) {
	fruitToAvg += pricesArray[i]; 
}
console.log(fruitToAvg);
fruitToAvg /= pricesArray.length;
console.log(fruitToAvg);
return fruitToAvg;

};
