                     //Assignment2 Of Array part 1
                     //Date: 21/May/2024
                     //Name: Rameen Rashid

/*Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to manage object manipulation effectively.*/
type Product = {                                //Define a type Product to represent product properties
    name : string,
    price : number,
    ineventory : {
        stock : number,
        colorOptions : string[]
    }
};
let products : Product[] = [                    //Creating an array of products containin product objects
    {
        name : "Watch",
        price : 2000,
        ineventory : {
            stock : 70,
            colorOptions :["black","blue","silver","golden"]
        }
    },
    {
        name : "Shoes",
        price : 3000,
        ineventory : {
            stock : 150,
            colorOptions :["black","brown","white","grey"]
        }
    },
    {
        name : "Bag",
        price : 2000,
        ineventory : {
            stock : 100,
            colorOptions :["black","red","blue","green"]
        }
    }
]
function changeColor(products:Product,newColor:string){                                //Creating a function for changed colour and adjustment of price
    let colorChange = products.ineventory.colorOptions.indexOf(newColor);
    if(colorChange !== -1){
        switch(newColor){
            case "red":
                products.price *=1.1;                                   //Increase 10% for red colour
                break;
            case "blue":
                products.price *= 0.95;                                   //Decrease 5% for blue colour
                break;
            default:
                break;    
        };
        products.ineventory.colorOptions.splice(colorChange,1);
        products.ineventory.colorOptions.unshift(newColor);
    }
    else {
        console.log(`Colour : ${newColor} is not available for ${products.name}`);        
    };
};
console.log("\n \t \t ***Product Inventory Details*** \n")
products.forEach(products =>{                                              //Diplay product details
    console.log(`Product Name : ${products.name}`);
    console.log(`Product Price : ${products.price.toFixed(2)}`);
    console.log(`Stock : ${products.ineventory.stock}`);
    console.log(`Available Colours : ${products.ineventory.colorOptions.join(",")} \n `);
});
console.log("\n Testing Of Change Colour Function for red  ");                         
changeColor(products[2],"red");                                             //Function calling
console.log(products[2]);
console.log("\n Testing Of Change Colour Function for blue  ");   
changeColor(products[0],"blue");                                             //Function calling
console.log(products[0]);



