
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        title : 'Margherita',
        price : 199,
        inCart : 0
    },
    {
        title : 'Farmhouse',
        price : 299,
        inCart : 0
    },
    {
        title : 'Peppy Paneer',
        price : 200,
        inCart : 0
    },
    {
        title : 'Veg Extravaganza',
        price : 335,
        inCart : 0
    },
    {
        title : 'Deluxe Veggie',
        price : 335,
        inCart : 0
    },
    {
        title : 'Cheese n Tomato',
        price : 450,
        inCart : 0
    },
    {
        title : 'Garlic Breadsticks',
        price : 99,
        inCart : 0
    },
    {
        title : 'Veg Parcel',
        price : 39,
        inCart : 0
    },
    {
        title : 'Taco Mexicana',
        price : 118,
        inCart : 0
    },
    {
        title : 'Mirinda (500ml)',
        price : 60,
        inCart : 0
    },
    {
        title : '7Up (500ml)',
        price : 60,
        inCart : 0
    },
    {
        title : 'Pepsi (500ml)',
        price : 60,
        inCart : 0
    },
    {
        title : 'Butterscotch Mousse Cake',
        price : 99,
        inCart : 0
    },
    {
        title : 'Choco Lava Cake',
        price : 99,
        inCart : 0
    },
    {
        title : 'Brownie Fantasy',
        price : 59,
        inCart : 0
    },

];



for(let i=0 ; i < carts.length ; i++) {
    carts[i].addEventListener('click',()=> {
        cartNumbers(products[i]);
        totalCost(products[i]);

    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (action == 'decrease') {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
    } else if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1 ;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.title] == undefined) {
            cartItems = {
                ...cartItems,
                [product.title] : product
            }
        }
        cartItems[product.title].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.title] : product
        }
    }

    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}

function totalCost(product, action) {
    //console.log('The product price is',product.price)
    let cartCost = localStorage.getItem('totalCost');

    if(action == 'decrease') {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost - product.price);
    }else if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage .setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}


function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    // cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');

    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="assets/images/${item.title}.jpg" width=200px height=150px/>
                <span class="sm-hide">${item.title}</span>
            </div>
            <div class="price sm-hide">₹${item.price}.00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">₹&nbsp&nbsp;${item.inCart * item.price}.00</div>`;
        }); 

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                ₹&nbsp&nbsp;${cartCost}.00
                </h4>
        `;

    }

    deleteButtons();
    manageQuantity();
}









function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);

    let cartCost= localStorage.getItem('totalCost');
    
    for(let i=0; i< deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.trim();
             console.log(productName);
            // console.log(cartItems[productName].title + " " + cartItems[productName].inCart); 
           localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
           
           localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

           delete cartItems[productName];
           localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        // console.log(cartItems[productName]);
           displayCart();
           onLoadCartNumbers();
        });
    }

}   



function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');

    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    for(let i=0 ; i< decreaseButtons.length ; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

            if(cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], 'decrease');
                totalCost(cartItems[currentProduct], 'decrease');
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
           
        })
    }

    for(let i=0 ; i< increaseButtons.length ; i++) {
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

            
                cartItems[currentProduct].inCart += 1;
                cartNumbers(cartItems[currentProduct]);
                totalCost(cartItems[currentProduct]);
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            
        })
    }

}





onLoadCartNumbers();
displayCart();












