var storeGoods = [];
var productName = prompt("What is the product name?");
var productType = prompt("What is the product Type?");
var goodPrice = prompt("What is the product Price?")


function isTaxExempt(typeOfGood){
    let exemptGoods = ["book","food","medical"];
    return exemptGoods.includes(typeOfGood);
}
function createProduct(goodName,goodType, goodPrice){
    let isImport = confirm("Is good Imported?");
    let isExempt = isTaxExempt(goodType);
    storeGoods[goodName]= {
        productType: goodType,
        productImported: isImport,
        productPrice: goodPrice

    }
    if(isImport){
        storeGoods[goodName][productTax] = .15;
    }else if(isExempt){
        storeGoods[goodName][productTax] = 0;
    }else{
        storeGoods[goodName][productTax] = .1
    }
}

