document.addEventListener("DOMContentLoaded", function () {
  const cartItemsTableBody = document.querySelector("#cart-items tbody");
  const totalQuantitySpan = document.getElementById("total-quantity");
  const totalAmountSpan = document.getElementById("total-amount");
  const checkoutForm = document.getElementById("checkout-form");

  // Retrieve cartArray from localStorage
  const cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

  function updateCart() {
    cartItemsTableBody.innerHTML = "";
    let totalQuantity = 0;
    let totalAmount = 0;

    cartArray.forEach((item, index) => {
      const stockItem = stockArray[item.stockItemIndex];
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${stockItem.name}</td>
        <td>Rs. ${stockItem.price}</td>
        <td>
          <button class="btn-decrease" data-index="${index}">-</button>
          ${item.qty}
          <button class="btn-increase" data-index="${index}">+</button>
        </td>
        <td>Rs. ${item.qty * stockItem.price}</td>
        <td><button class="btn-delete" data-index="${index}">Delete</button></td>
      `;

      cartItemsTableBody.appendChild(row);

      totalQuantity += item.qty;
      totalAmount += item.qty * stockItem.price;
    });

    totalQuantitySpan.textContent = totalQuantity;
    totalAmountSpan.textContent = totalAmount;
  }

  function handleCartActions(event) {
    const target = event.target;
    const index = target.getAttribute("data-index");

    if (target.classList.contains("btn-decrease")) {
      if (cartArray[index].qty > 1) {
        cartArray[index].qty -= 1;
      } else {
        cartArray.splice(index, 1); // Remove item if qty is 0
      }
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      updateCart();
    } else if (target.classList.contains("btn-increase")) {
      cartArray[index].qty += 1;
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      updateCart();
    } else if (target.classList.contains("btn-delete")) {
      cartArray.splice(index, 1); // Remove item
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      updateCart();
    }
  }

  function handleCheckoutForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;

    alert(`Order Submitted!\nName: ${name}\nAddress: ${address}\nThank you for your purchase!`);

    // Clear cart
    localStorage.removeItem("cartArray");
    window.location.href = "index.html"; // Redirect to home page or elsewhere
  }

  // Initialize cart display
  updateCart();

  // Event listeners
  cartItemsTableBody.addEventListener("click", handleCartActions);
  checkoutForm.addEventListener("submit", handleCheckoutForm);
});
