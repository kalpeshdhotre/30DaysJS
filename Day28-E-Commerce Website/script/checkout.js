const cartArray = JSON.parse(localStorage.getItem("cartArray"));
const stockArray = JSON.parse(localStorage.getItem("stockArray"));
const checkout = document.getElementById("btnCheckout");
const custDetailForm = document.getElementById("custDetails");
const payment = document.getElementById("payment");
console.log(cartArray);
console.log(stockArray);

function populateCart() {
  const container = document.querySelector(".cart-container tbody");
  let finalTotal = 0;
  container.innerHTML = "";
  cartArray.forEach((element, index) => {
    const cartRow = document.createElement("tr");
    cartRow.innerHTML = `
      <td class="prdImageName">
        <span><img src="${stockArray[element.stockItemIndex].image}" alt="" /></span>${stockArray[element.stockItemIndex].name}
      </td>
      <td class="qtyControls">
  <div class="qtyWrapper">
    <i class="fa-solid fa-plus add-qty" data-index="${index}"></i>
    <span id="qty" data-index="${index}">${element.qty}</span>
    <i class="fa-solid fa-minus reduce-qty" data-index="${index}"></i>
    <i class="fa-solid fa-trash delete-item" data-index="${index}"></i>
  </div>
</td>
      <td>${stockArray[element.stockItemIndex].price}</td>
      <td>${stockArray[element.stockItemIndex].price * element.qty}</td>
    `;
    container.appendChild(cartRow);
    finalTotal += stockArray[element.stockItemIndex].price * element.qty;
  });
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td colspan="3" style="text-align: right;">Final Total:</td>
    <td id="finalTotal">$${finalTotal}</td>
  `;
  container.appendChild(totalRow);
  document.querySelectorAll(".add-qty").forEach((icon) => icon.addEventListener("click", handleAddQty));
  document.querySelectorAll(".reduce-qty").forEach((icon) => icon.addEventListener("click", handleReduceQty));
  document.querySelectorAll(".delete-item").forEach((icon) => icon.addEventListener("click", handleDeleteItem));
}

function handleAddQty(event) {
  const index = event.target.getAttribute("data-index");
  cartArray[index].qty += 1;
  populateCart();
}
populateCart();

function handleReduceQty(event) {
  const index = event.target.getAttribute("data-index");
  if (cartArray[index].qty > 1) {
    cartArray[index].qty -= 1;
    populateCart();
  }
}

function handleDeleteItem(event) {
  console.log("hello from delete");

  const index = event.target.getAttribute("data-index");
  cartArray.splice(index, 1); // Remove the item from the cart
  populateCart();
}

checkout.addEventListener("click", () => {
  custDetailForm.style.visibility = "visible";
});

payment.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const totalItems = cartArray.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = document.getElementById("finalTotal").innerText;
  console.log(totalPrice);

  alert(`Dear ${name}, your order for ${totalItems} item(s) of Rs. ${totalPrice} is confirmed`);

  window.location.href = "index.html";
});
