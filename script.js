const products = [
    { id: 1, name: "Classic T-Shirt", price: 499, image: "https://via.placeholder.com/250" },
    { id: 2, name: "Stylish Hoodie", price: 999, image: "https://via.placeholder.com/250" },
    { id: 3, name: "Denim Jacket", price: 1499, image: "https://via.placeholder.com/250" }
];

const productList = document.querySelector(".product-list");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Product list display
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
});

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);

    // 🧩 Ye line localStorage mein cart save kar rahi hai
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} added to cart! 🛒`);
}
