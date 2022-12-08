let button= document.getElementById("add");
let products= document.getElementById("products");
button.addEventListener
("click",()=>{
    let productName= document.getElementById("product-name").value;
    let productPrice=Number (document.getElementById("price").value);
    let productNumber=Number (document.getElementById("quantity").value);
    let totalPrice = productNumber * productPrice;

    if (productName !=""&&productPrice !=""&&productNumber !=""&& !Number.isNaN(productPrice)&& productPrice > 0 &&Number.isInteger(productNumber) && productNumber > 0)
    { products.innerHTML+=`<tr class="thead-dark"><td>${productName}</td><td>${productPrice}$</td><td>${productNumber}</td><td>${totalPrice}$</td><td><button onclick="delete_func(event)">remove</button></td></tr>`}
    else
    {alert ("The value you entered is wrong. Please check Product name, Price & Quantity again.");}
    });