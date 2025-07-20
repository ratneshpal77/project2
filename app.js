let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cartCount").innerText = cart.length;
  alert(`${name} added to cart!`);
}

document.getElementById("cartButton").addEventListener("click", () => {
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  totalAmount.innerText = total;
  document.getElementById("cartPopup").style.display = "block";
});

function closeCart() {
  document.getElementById("cartPopup").style.display = "none";
}
