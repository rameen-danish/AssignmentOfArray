//Assignment Of Array part 1
//Date: 21/May/2024
//Name: Rameen Rashid
var products = [
    {
        name: "Watch",
        price: 2000,
        ineventory: {
            stock: 70,
            colorOptions: ["black", "blue", "silver", "golden"]
        }
    },
    {
        name: "Shoes",
        price: 3000,
        ineventory: {
            stock: 150,
            colorOptions: ["black", "brown", "white", "grey"]
        }
    },
    {
        name: "Bag",
        price: 2000,
        ineventory: {
            stock: 100,
            colorOptions: ["black", "red", "blue", "green"]
        }
    }
];
function changeColor(products, newColor) {
    var colorChange = products.ineventory.colorOptions.indexOf(newColor);
    if (colorChange !== -1) {
        switch (newColor) {
            case "red":
                products.price *= 1.1; //Increase 10% for red colour
                break;
            case "blue":
                products.price *= 0.95; //Decrease 5% for blue colour
                break;
            default:
                break;
        }
        ;
        products.ineventory.colorOptions.splice(colorChange, 1);
        products.ineventory.colorOptions.unshift(newColor);
    }
    else {
        console.log("Colour : ".concat(newColor, " is not available for ").concat(products.name));
    }
    ;
}
;
console.log("\n \t \t ***Product Inventory Details*** \n");
products.forEach(function (products) {
    console.log("Product Name : ".concat(products.name));
    console.log("Product Price : ".concat(products.price.toFixed(2)));
    console.log("Stock : ".concat(products.ineventory.stock));
    console.log("Available Colours : ".concat(products.ineventory.colorOptions.join(","), " \n "));
});
console.log("\n Testing Of Change Colour Function for red  ");
changeColor(products[2], "red"); //Function calling
console.log(products[2]);
console.log("\n Testing Of Change Colour Function for blue  ");
changeColor(products[0], "blue"); //Function calling
console.log(products[0]);
