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
// create products for the store
function createProduct(goodName,goodType, goodPrice){
    let isImport = confirm("Is good Imported?");
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

// Create sample store products
createProduct("book1","book",12.49);
createProduct("music cd","music",14.99);
createProduct("chocolate","food",.85)
// calculate total of products in store
totalCalc(storeGoods);