let carts = document.querySelectorAll('.add-cart');
// This just gets the carts  from the class
//console.log(carts);
console.log("Hello  world")
let products  =[ 
   { name : "Grey Tshirt",
    tag: "gereyTshirt",
    price: 15,
    //inCart: 0
},
    
    { name : "Grey hoodie",
    tag: "geryTshirt",
    price: 70,
    //inCart: 0
},
    
    { name : "Grey Tshirt",
    tag: "geryTshirt",
    price: 10,
    //inCart: 0
},
    
    { name : "Grey Tshirt",
    tag: "geryTshirt",
    price: 80,
    //inCart: 0
},



]
console.log("Hello here")
for (let i =0; i< carts.length; i++) {
    // This is  going thorugh the carts
    console.log(products[i]);
    carts[i].addEventListener('click', () =>{
        // What this does is it listens to a click on the add cart- These add carts have different numbers so when you click and add to cart in one of the products. This will trigger this for loop 
        cartNumbers(products[i]);
        // This above line passes  the product which  we are han=ving as oobjects right now to the  to teh function carts numbers--- know that the products are also numbered.
        
})}
function onLoadCartNumbers() {
    // THis  function always keeps the cart number  function updated always
    let productNumbers =localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span'). textContent =productNumbers;
    }
}


//console.log(product);
function cartNumbers(product) {
    // This function takes the product which is an object.
    console.log(product);
    let productNumbers =localStorage.getItem('cartNumbers')
    //console.log(productNumbers);
    // This thing of storing things in the local storage is like having to set the 
    // The setItem sets the item to a given value and the get item gets that value letter
    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1)
        document.querySelector('.cart span').textContent = 
        productNumbers+1;
    
    }
        else {
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.cart span').textContent = 1;

        }
        setItems(product);

        
        

    }
    cartNumbers();
    function setItems(product){
        //  This function receieves the product and needs to store the in cart number in the local storage 
        product.incart =1;
        let cartItems = {
            [product.tag]: product
        }
       
        localStorage.setItem("productsIncart", JSON.stringify(cartItems));
        
        /*let cartItems =localStorage.getItem('productsinCart');
        cartItems =JSON.parse(cartItems); */
// This if else statement fixes the problem of overwriting for example if  you clicked on an item and again you click on  another item you have to just update the incart but not overwtie it.
        if(cartItems != null) {
            if(cartItems[product.tag] != undefined) {
                cartItems ={
                    ...cartItems,
                    [product.tag]: product
                }
            }
            
            cartItems [product.tag].incart +=1;
        }

        else {
            product.Incart = 1;
            cartItems = {
                [product.tag]: product
            }
        }



       
        
        // This json thing was used because the  object been passed should not be in js format but rather a  json
        
        
    
    onLoadCartNumbers()

   /*console.log(productNumbers);
    console.log(typeof productNumbers);
    localStorage.setItem('cartNumbers',1);
    productNumbers =parseInt(productNumbers);
    console.log(typeof productNumbers);
    localStorage.setItem('cartNumbers',1)*/
// Lesson 0f 9 minutes 
    function totalCost(product) {
        // Main thing here is to get the total price and it is not complicated
        
        
        //console.log("The product price is", product.price);
        let cartcost  = localStorage.getItem('totalCost');
        //cartcost =parseInt(cartcost);
        console.log("My cartCost is", cartcost);
        console.log(typeof cartcost);
      //localStorage.setItem("totalCost", product.price);
    if (cartcost != null) {
        cartcost =parseInt(cartcost);
        localStorage.setItem("totalCost", cartcost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
}}
// Below is the objects array as well as the getting stuff from html an fthe for loop to go through the objects
let carts = document.querySelectorAll('.add-cart');
console.log("Moha");
let products  =[ 
   { name : "Grey Tshirt",
    tag: "gereyTshirt",
    price: 30,
    inCart: 0},
    
    { name : "Grey hoodie",
    tag: "greyhoddie",
    price: 20,
    inCart: 0},
    
    { name : "black Tshirt",
    tag: "BlackTshirt",
    price: 67,
    inCart: 0},
    
    { name : "Balck hoodie",
    tag: "Black hoodie",
    price: 80,
    inCart: 0},]
for (let i =0; i< carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
        //console.log(products[i].tag);
        console.log(products[i].inCart);
})}

// The 1 first function 
function cartNumbers(product) {
    console.log("MOha");
   let productNumbers =localStorage.getItem('cartNumbers')
   productNumbers = parseInt(productNumbers);
   
   if (productNumbers) {
       localStorage.setItem('cartNumbers', productNumbers +1)
       document.querySelector('.cart span').textContent = 
       productNumbers+1;
   
   }
       else {
           localStorage.setItem('cartNumbers',1);
           document.querySelector('.cart span').textContent = 1;

       }
       setItems(product);
        }

// The 2 second function with  with loading to update the Carts on top
function onLoadCartNumbers() {
    let productNumbers =localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span'). textContent =productNumbers;
    }
}
// The 3 third function 
function setItems(product){
        console.log(product);
let cartItems = localStorage.getItem('productsinCart');
        cartItems =JSON.parse(cartItems);
        console.log("Hi");
        

// This if lese statement fixes the problem of overwriting for example if  you clicked on an item and again you click on  another item you have to just update the incart but not overwtie it.
// To be clear the in cart thing means how many of that item is in the cart
        
console.log(product.inCart);

if(cartItems != null) {
    console.log("Hello");
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    //  THe operator used  here is called the rest operator in JS
                    ...cartItems,
                    [product.tag]: product
                }
            }
           
            cartItems[product.tag].inCart += 1;
        }

        else {
            products.inCart = 1;
            cartItems = {
                [products.tag]: products
            }
        }

// Main thing  here is to show you the items in cart

        localStorage.setItem("productsIncart", JSON.stringify(cartItems));
    }
    

  

 





// The Lesson 0f 9 minutes
function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartcost  = localStorage.getItem('totalCost');
    //cartcost =parseInt(cartcost);
    console.log("My cartCost is", cartcost);
    console.log(typeof cartcost);
  //localStorage.setItem("totalCost", product.price);
if (cartcost != null) {
    
    cartcost =parseInt(cartcost);
    localStorage.setItem("totalCost", cartcost + product.price);

}
else {
    localStorage.setItem("totalCost", product.price);
}
}

// This display Cart function is giving me problems that I think are steming form the initia lset item fucntion. This problem involves storing thing sin the local storage but at the atime i could not store well... I think my incart was not updating well....
function  displayCart(){
    // It seems that I am ahving a recurring problem with the ProductsIncart thing  coz it seems it is giving me a problem  in giving out the full description of the items -- You might want to go back and solve this
let cartItems = localStorage.getItem("productsIncart");
// When you grab some items from the local storage they come as JSON so you have to convert them back to JS  as shown below 
cartItem =JSON.parse(cartItems);
//console.log(cartItem);
let productContainer =document.querySelector(".products-container");

if (cartItems && productContainer) {
   productContainer.innerHTML ='';
   Object.values(cartItems).map(item => {
    productContainer.innerHTML += `
       <div class="product"> 
        <ion-icon name ="close-circle"></ion-icon>
           <img src ="./images/${item.tag}.jpg">
               <span>${item.name}</span>
         </div>
         <div class="price"> ${item.price}</div>
         <div class ="quantity">
         <ion-icon class ="decrease"
         name ="arrow-dropleft-circle" ></ion-icon>
         <span>${item.inCart}</span>
         <ionicon class="increase"
         name="arrow-dropright-circle" ></ion-icon>
         <div class= "total">
             $${item.inCart + item.price}, 00
         </div>`
         ;

   });
   productContainer.innerHTML +=
   `<div class= "basketTotalContainer">
       <h4 class ="basketTotalTitle">
           Basket Total
       </h4>
       <h4 class= "basketTotal"> $$ {cartCost},00</h4>;`
   }}
   




   onLoadCartNumbers();
displayCart();

