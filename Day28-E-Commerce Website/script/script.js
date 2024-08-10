const productCatalogue = document.getElementById("productCatalogue");
const cartIcon = document.getElementById("cart-icon");

// Stock items array
const stockArray = [
  {
    name: "coros vertix",
    image: "./images/products/prd1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 599,
  },
  {
    name: "coros appex",
    image: "./images/products/prd2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 399,
  },
  {
    name: "coros hr monitor",
    image: "./images/products/prd3.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 99,
  },
  {
    name: "coros pace3",
    image: "./images/products/prd4.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 599,
  },
  {
    name: "coros apex2 pro",
    image: "./images/products/prd5.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 499,
  },
  {
    name: "coros vertix2s",
    image: "./images/products/prd6.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 699,
  },
  {
    name: "coros pace2s",
    image: "./images/products/prd7.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 699,
  },
  {
    name: "coros pace2s",
    image: "./images/products/prd8.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi.",
    price: 699,
  },
];
// Cart Array
const cartArray = [
  // {
  //   stockItemIndex: 1,
  //   qty: 1,
  // },
];

//add products from arraay to page
function addProductsToPage() {
  for (let i = 0; i < stockArray.length; i++) {
    const prd = document.createElement("div");
    prd.id = "productCard";
    prd.innerHTML = `
      <p class="prdName">${stockArray[i].name}</p>
      <img src="${stockArray[i].image}" alt="" />
      <p>${stockArray[i].description}</p>
      <p class="prdPrice">Rs. <span id="prdPrice">${stockArray[i].price}</span></p>
      <button class="btnAddToCart" data-index="${i}" >
        Add to <span><i class="fa-solid fa-cart-shopping"></i></span>
      </button>    
    `;
    productCatalogue.appendChild(prd);
  }
  addToCartEventListner();
}

// add event listner to addToCart button
function addToCartEventListner() {
  const btnAddToCart = document.querySelectorAll(".btnAddToCart");
  btnAddToCart.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      // define function to add item to cart.
      addToCart(index);
    });
  });
}

// function to add item to cart
function addToCart(index) {
  const item = cartArray.find((item) => item.stockItemIndex === Number(index));
  if (item) {
    item.qty += 1;
  } else {
    cartArray.push({
      stockItemIndex: Number(index),
      qty: 1,
    });
  }
  console.log(cartArray);

  updateCartTotal(cartArray.reduce((total, item) => total + item.qty, 0));
}

// function to update card icon badge number
function updateCartTotal(total) {
  const cartIcon = document.querySelector("#navOther li:nth-child(2)");
  const cartBadge = cartIcon.querySelector(".cart-badge");

  cartBadge.textContent = total;

  if (total > 0) {
    cartIcon.classList.add("has-items");
  } else {
    cartIcon.classList.remove("has-items");
  }
}

cartIcon.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("cartArray", JSON.stringify(cartArray));
  window.location.href = "checkout.html";
});

updateCartTotal(0);
addProductsToPage();
