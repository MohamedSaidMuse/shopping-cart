let carts = document.querySelectorAll('.add-cart');
console.log("Moha");
let products  =[
   { name : "greyhoddie1",
    tag: "greyhoddie1",
    price: 30,
    inCart: 0},

    { name : "Men's Shoes",
    tag: "Men's Shoes",
    price: 20,
    inCart: 0},

    { name : "Men's Casual shoes",
    tag: "Men's Casual shoes",
    price: 67,
    inCart: 0},

    { name : "greyshirt1",
    tag: "greyshirt1",
    price: 80,
inCart: 0},]
for (let i =0; i< carts.length; i++) {
    carts[i].addEventListener('click', () =>{
// when click item, add or increase number in cartItems
        setItems(products[i]);

// show total cart count again
    onLoadCartNumbers();
        
})}

// The 2 second function with  loading to update the Carts on top

function onLoadCartNumbers() {

    // get cartItems from loca
    let cartItems = localStorage.getItem('productsIncart');
    
    
    cartItems = JSON.parse(cartItems);

    let totalNumber = 0;

    // get total count from cart items
   
    Object.values(cartItems).forEach(item => {
        totalNumber += item.inCart;
       
    });
 
    // show total number in cart
    document.querySelector('.cart span').textContent =
        totalNumber;
        console.log(totalNumber);
}

// second function 
function onChangeCount(key, bIncrease = true) {
   
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);
 
    let item = cartItems[key];

    if (bIncrease == true) {
        item.inCart ++;
    } else {
       
        item.inCart --;
         // this prevents the negative  values 
        if (item.inCart < 1) {
            item.inCart = 1;
        }
    }

    let saveCartItems = JSON.stringify(cartItems);
    localStorage.setItem('productsIncart', saveCartItems);

    onLoadCartNumbers();
    displayCart();
}


//  3 function 

function setItems(product) {
let cartItems =localStorage.getItem("productsIncart");
cartItems = JSON.parse(cartItems);
console.log("My cartItems are ",cartItems);

if (cartItems != null) {
    if (cartItems[product.tag] == undefined){
        cartItems =  {
            ...cartItems,
                [product.tag]:product
            }
        }

    cartItems[product.tag].inCart += 1;
}
else {
    product.inCart =1;
    cartItems = {
        [product.tag]: product
    }
}

localStorage.setItem("productsIncart", JSON.stringify(cartItems));

}

// 4 function 
function totalCost(product) {
    let cartcost  = localStorage.getItem('totalCost');
    
  if (cartcost != null) {
    cartcost =parseInt(cartcost);
    localStorage.setItem("totalCost", cartcost + product.price);}
else {
    localStorage.setItem("totalCost", product.price);}
}

// The 5 fifth function
function displayCart() {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);
    let productContainer =document.querySelector
    (".products");
    
    let cartcost  = 0;

    console.log(cartItems);
    if(cartItems && productContainer ) {
        
        productContainer.innerHTML =

        '';
        
        
        Object.keys(cartItems).map(key => {
           let item = cartItems[key];
       
     console.log(item.price);
            productContainer.innerHTML +=`
            <div class="product">
            <ion-icon name= "close-circle" onclick="onRemoveItem('${key}')"></ion-icon>
            <img src="./images/${item.tag}.jpg"
            width ="75";
        height = "35";>
            
            <span class="tag">${item.name}</span>
            <div class =="price">${item.price}</div>
              <div class="quantity"> 
              <ion-icon name="arrow-down-outline" onclick="onChangeCount('${key}', false)"></ion-icon>
              <span>  ${item.inCart} </span>
              <ion-icon name="arrow-up-outline" onclick="onChangeCount('${key}', true)"></ion-icon>
              </div>
              <div class="total">
              $${item.inCart * item.price}
              
              </div>
            `;

            cartcost += (item.inCart * item.price);
        });

        productContainer.innerHTML += `
        <div class ="basketToalContainer">
        <h4 class = "basketTotalTitle">
        Basket Total </h4>
        <h4  class= "basketTotal" >
        $${cartcost}

        </h4>

        `;

    }
    
}


    // 6th function 
    function onRemoveItem(selectedKey) {
        console.log('Mohamed');
        let cartItems = localStorage.getItem('productsIncart');
        cartItems = JSON.parse(cartItems);
        console.log(cartItems);

        if (selectedKey != "") {
            // delete
            delete cartItems[selectedKey];
            let saveCartItems = JSON.stringify(cartItems);
            localStorage.setItem('productsIncart', saveCartItems);

            onLoadCartNumbers();
            displayCart();
        }
    }
   onLoadCartNumbers();
   displayCart();