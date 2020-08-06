// --- VARIABLES ---
// store to place created goods
var storeGoods = [];
// shopping cart to add store goods to buy
var shoppingCart= [];
// shoppers items to add to cart
var shopperList = [];
// --- FUNCTIONS ----

// ** USER INTERACTION **
function getName(){
    let productName = prompt("What is the product name?");
    return typeof productName === "string" ? productName : getName();
}
function getType() {
    let productType = prompt("What is the product Type?");
    return typeof productType === "string" ? productType : getType();
}
function getPrice() {
    let productPrice = prompt("What is the product Price?");
    if(typeof productPrice ==="boolean"|| typeof productPrice == null){
        return getPrice();
    }else if(isNaN( parseFloat(productPrice))){
        return getPrice();
    }
    return parseFloat(productPrice);
}
// ** END USER INTERACTION **

// ** VALIDATIONS **
// Check if item is tax exempt
function isTaxExempt(typeOfGood){
    let exemptGoods = ["book","food","medical"];
    return exemptGoods.includes(typeOfGood);
}
// Check if item is imported
function isImported() {
    return confirm("Is good Imported?");
}
// ** END VALIDATIONS **

// create products for the store
function createProduct(goodName,goodType, goodPrice,goodImported){
    let isImport = goodImported;
    let isExempt = isTaxExempt(goodType);
    let salesTax = .1
    if(isImport){
        salesTax = .15;
    }else if(isExempt){
        salesTax = 0;
    }
    storeGoods.push(
        {
            productName: goodName,
            productType: goodType,
            productImported: isImport,
            productPrice: goodPrice,
            productTax: salesTax
        }
    )
}
// Sales Calculator
function totalCalc(cart) {
    var subtotal = 0;
    var salesTax = 0;
    cart.forEach(function(good) {
        let tax = (good.productPrice * good.productTax);
        salesTax += tax;
        subtotal += (good.productPrice);
        console.log(`1 ${good.productName} :$${good.productPrice} `);
    })
    console.log("Subtotal: ", subtotal.toFixed(2));
    console.log("Sales Tax: ", salesTax.toFixed(2));
    console.log("Total ", (subtotal+salesTax).toFixed(2));
    alert("CHECK RECEIPT IN CONSOLE");
    return (subtotal+salesTax).toFixed(2);
}
// add shoppingList to shoppingCart
function addShoppingList() {
    shopperList.forEach(function (listItem) {
        let cartItem = storeGoods.filter(function (obj) {
            return obj.productName === listItem;
        })
        shoppingCart.push(cartItem[0]);
    })
}
// ** SAMPLE PRODUCT CREATION **
alert("CREATING STORE PRODUCTS");
createProduct("book","book",12.49,false);
createProduct("music CD","music",16.49,false);
createProduct("chocolate bar","food",.85,false)
createProduct("imported box of chocolates","food",10.00,true);
createProduct("imported bottle of perfume","cosmetic",47.50,true);
createProduct("packet of headache pills","medical",9.75,false);
createProduct("imported bottle of perfume","cosmetic",47.50,true);
createProduct("box of chocolates imported","food",11.25,true);
createProduct("bottle of perfume","cosmetic",20.89,false);
// ** END PRODUCT CREATION **

// ** TEST PROGRAM **
// alert("RANDOMLY ADDING ITEMS TO CART");
// randomly grab store goods to put in cart
// var randomNum = Math.floor(Math.random() * (storeGoods.length));
// shoppingCart.push(storeGoods[randomNum]);
// randomNum = Math.floor(Math.random() * (storeGoods.length));
// shoppingCart.push(storeGoods[randomNum]);
// check what is in the cart
// console.log(shoppingCart);
// totalCalc(shoppingCart);
// ** END TEST PROGRAM **

// ** PROGRAM SIMULATION **
// Shopper 1
console.log("Shopper 1");
shoppingCart= [];
shopperList = ["book","music CD","chocolate bar"];
addShoppingList();
totalCalc(shoppingCart);
// Shopper 2
console.log("Shopper 2")
shopperList = ["imported box of chocolates","imported bottle of perfume"];
addShoppingList();
totalCalc(shoppingCart);
// Shopper 3
console.log("Shopper 3")
shopperList = ["imported bottle of perfume","bottle of perfume","packet of headache pills","imported box of chocolates"];
addShoppingList();
totalCalc(shoppingCart);
// ** END PROGRAM SIMULATION **