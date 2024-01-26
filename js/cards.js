
// JavaScript code for associated HTML document
// Page Loading event listener
// document.addEventListener("DOMContentLoaded", function () {
    	// alert("Page loading...");
    // });
    // Initialize an empty 2D array for the cart
    let cart = [];
    let products = 0;


    // Function to add items to the cart
    function addToCart(itemName, price) {
        cart.push([itemName, price]);
        updateCheckout();
    }
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCheckout();
    }


    // Function to remove an item from the cart by item name
    function removeFromCartByItemName(itemName) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i][0] === itemName) {
                cart.splice(i, 1);
                break; // Assuming each item name is unique, so we can exit the loop once found
            }
        }
        updateCheckout();
    }

    // Function to update the checkout alert
    function updateCheckout() {
        checkout();
    }


    // Function to display items and total price in an alert
    function checkout() {
        let itemsList = "Items in your cart:\n";
        let totalPrice = 0;

        // Iterate through the cart array
        for (let i = 0; i < cart.length; i++) {
            itemsList += `${cart[i][0]} - $${cart[i][1]}\n`;
            totalPrice += cart[i][1];
        }

        // Display the alert with items and total price
        alert(itemsList + `\nTotal Price: $${totalPrice.toFixed(2)}`);
    }





    // Bootstrap card clicked event listener
    document.getElementById("card001").addEventListener("click", function () {
    console.log("Clicked card001");
    var element = document.getElementById("card001");
    if (element.innerHTML == "Add to cart") {
        element.innerHTML = "Remove from cart";
        element.style.background = "pink";
        addToCart('Bluegrass Bourbon Gouda', 11.99);
    } else {
        element.innerHTML = "Add to cart";
        element.style.background = "yellow";
        removeFromCartByItemName('Bluegrass Bourbon Gouda');
    }
    });
    document.getElementById("card002").addEventListener("click", function () {
        var element = document.getElementById("card002");
        if (element.innerHTML == "Add to cart") {
            element.innerHTML = "Remove from cart";
            products = 1;
            element.style.background = "pink";
            addToCart('Smoked Favourites', 59.99);
        }
        else {
            element.innerHTML = "Add to cart";
            products = 0;
            element.style.background = "yellow";
            removeFromCartByItemName('Smoked Favourites');
        }
    });
    document.getElementById("card003").addEventListener("click", function () {
        var element = document.getElementById("card003");
        if (element.innerHTML == "Add to cart") {
            element.innerHTML = "Remove from cart";
            products = 1;
            element.style.background = "pink";
            addToCart('3 Amigos Spicy Gouda', 9.99);
        }
        else {
            element.innerHTML = "Add to cart";
            products = 0;
            element.style.background = "yellow";
            removeFromCartByItemName('3 Amigos Spicy Gouda');
        }
    });

    document.getElementById("card004").addEventListener("click", function () {
        var element = document.getElementById("card004");
        if (element.innerHTML == "Add to cart") {
            element.innerHTML = "Remove from cart";
            products = 1;
            element.style.background = "pink";
            addToCart('Fratello', 8.49);
        }
        else {
            element.innerHTML = "Add to cart";
            products = 0;
            element.style.background = "yellow";
            removeFromCartByItemName('Fratello');
        }
    });
    // document.getElementById("card003").addEventListener("click", function() {
    //    checkout();
    //  });
    //  document.getElementById("card004").addEventListener("click", function() {
    //      checkout();
    // });
    // Bootstrap card clicked event listener
    document.getElementById("btnCart").addEventListener("click", function () {
        //alert("Thank you for your purchase of:\nFord GTI\nPrice: 129.00");
        updateCheckout();
    });


    document.addEventListener('DOMContentLoaded', function () {
    var scalingCard = document.getElementById('scalingCard');
    scalingCard.classList.add('scaled'); // Add the 'scaled' class to trigger the scale effect
    });

