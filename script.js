function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


var appleCurrentPrice = 100;
var appleCurrentInventory = 0;
var appleAveragePrice = 0;
var orangeCurrentPrice = 100;
var orangeCurrentInventory = 0;
var orangeAveragePrice = 0;
var bananaCurrentPrice = 100;
var bananaCurrentInventory = 0;
var bananaAveragePrice = 0;
var pearCurrentPrice = 100;
var pearCurrentInventory = 0;
var pearAveragePrice = 0;
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

setInterval(function() {
console.log("A: " + appleCurrentPrice + " O: " + orangeCurrentPrice + " B: " + bananaCurrentPrice + " P: " + pearCurrentPrice)
appleCurrentPrice =  updatePrice(appleCurrentPrice, "apple");
orangeCurrentPrice = updatePrice(orangeCurrentPrice, "orange");
bananaCurrentPrice = updatePrice(bananaCurrentPrice, "banana");
pearCurrentPrice = updatePrice(pearCurrentPrice, "pear");
}, 5000);