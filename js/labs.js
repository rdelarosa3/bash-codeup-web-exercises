var storeGoods = [];
function getName(){
    let productName = prompt("What is the product name?");
    return typeof productName === "string" ? productName : getName();
}
function getType() {
    let productType = prompt("What is the product Type?");
    return typeof productType === "string" ? productType : getType();
}
// Ensure price is a number
function getPrice() {
    let productPrice = prompt("What is the product Price?");
    if(typeof productPrice ==="boolean"|| typeof productPrice == null){
        return getPrice();
    }else if(isNaN( parseFloat(productPrice))){
        return getPrice();
    }
    return parseFloat(productPrice);
}
// Check if item is tax exempt
function isTaxExempt(typeOfGood){
    let exemptGoods = ["book","food","medical"];
    return exemptGoods.includes(typeOfGood);
}
// Check if item is imported
function isImported() {
    return confirm("Is good Imported?");
}
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
        console.log(good);
        let tax = (good.productPrice * good.productTax);
        salesTax += tax;
        subtotal += (good.productPrice);
    })
    console.log(subtotal.toFixed(2));
    console.log(salesTax.toFixed(2));
    console.log((subtotal+salesTax).toFixed(2));
    return (subtotal+salesTax).toFixed(2);
}
alert("LETS CREATE SOME PRODUCTS");
// Create sample store products
createProduct("book1","book",12.49,false);
createProduct("music cd","music",14.99,false);
createProduct("chocolate","food",.85,true)

// shopping cart to add store goods to buy
var shoppingCart= [];

alert("RANDOMLY ADDING ITEMS TO CART");
// randomly grab store goods to put in cart
var randomNum = Math.floor(Math.random() * (storeGoods.length));
shoppingCart.push(storeGoods[randomNum]);
randomNum = Math.floor(Math.random() * (storeGoods.length));
shoppingCart.push(storeGoods[randomNum]);

// check what is in the cart
console.log(shoppingCart);

// calculate total of products bought
totalCalc(shoppingCart);
alert("CHECK RECEIPT IN CONSOLE");
// storeGoods.filter(function(obj){
//     return obj.productName === "music cd";
// })