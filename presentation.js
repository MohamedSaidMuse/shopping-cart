let carts = document.querySelectorAll('.add-cart');
console.log("Moha");
let products = [
{name:"greyhoddie1",
tag: "greyhoddie1",
price: 30,
inCart:0,
},
{name:"Men's shoes",
tag: "Men's shoes",
price: 20,
inCart:0,
},

{name:"Men's casual shoes",
tag: "Men's casual shoes",
price: 67,
inCart:0,
},
{name:"greyshirt1",
tag: "greyshirt1",
price: 80,
inCart:0,
}

]
for (let i =0; i< carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        setItems(products[i]);
})}


function setItems(product) {

let cartItems =localStorage.getItem("productsIncart");

cartItems =JSON.parse(cartItems);

if(cartItems != null) {

  if(cartItems[product.tag] == undefined ) {
cartItems = {

...carTItems,
[product.tag]:product

}

  }
  cartItems[products.tag].inCart += 1;
}
else {
    products.inCart =1;
    cartItems = {
 [product.tag]: product


    }
}

localStorage.setItem("productsIncart", JSON.stringify(cartItems));






}
    
    
    
    
    
    
    
    
    
    