// Cart items ko load karo
const cartItemsContainer = document.querySelector(".cart-items");
const totalPriceElement = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
    });

    totalPriceElement.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();
