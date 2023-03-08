if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", Ready);
} else {
  Ready();
}

function Ready() {
    UpdateCart();
  UpdateCartTotal();
}

function UpdateCart() {
  const cartContainer = document.querySelector(".cart-items-container");
  const cartRows = cartContainer.getElementsByClassName("cart-item");
  const itemArr = JSON.parse(localStorage.getItem("itemArr"));
  console.log(cartRows);
  RefreshCartRows();
  RefreshCartRows();
  RefreshCartRows();
  RefreshCartRows();

  if (itemArr !== null) {
    MakeCartRows();
  }
  UpdateCartTotal();
}

const QuantityChange = (t) => {
  if (t.value <= 0) t.value = 1;
  const cartContainer = document.querySelector(".cart-items-container");
  const cartRows = cartContainer.getElementsByClassName("cart-item");
  const itemArr = JSON.parse(localStorage.getItem("itemArr"));
  for (let i = 0; i < cartRows.length; i++) {
    if (
      cartRows[i].querySelector(".in-cart-title").textContent ==
      t.parentElement.querySelector(".in-cart-title").textContent
    ) {
      itemArr[i].quantity = cartRows[i].querySelector(".quantity").value;
    }
  }
  localStorage.setItem("itemArr", JSON.stringify(itemArr));
  UpdateCartTotal();
};

const RemoveItemFromCart = (t) => {
  const cartContainer = document.querySelector(".cart-items-container");
  const cartRows = cartContainer.getElementsByClassName("cart-item");

  const itemArr = JSON.parse(localStorage.getItem("itemArr"));
  for (let i = 0; i < cartRows.length; i++) {
    if (
      cartRows[i].querySelector(".in-cart-title").textContent ==
      t.parentElement.querySelector(".in-cart-title").textContent
    ) {
      console.log(i + cartRows[i].querySelector(".in-cart-title").textContent);
      console.log(
        i + t.parentElement.querySelector(".in-cart-title").textContent
      );
      console.log(i + itemArr.length);
      if (itemArr.length == 1) itemArr.length = 0;
      else itemArr.splice(i, 1);

      localStorage.setItem("itemArr", JSON.stringify(itemArr));
    }
  }

  t.parentElement.remove();
  UpdateCart();
  UpdateCartTotal(t);
};

const UpdateCartTotal = (t) => {
  const items = document.getElementsByClassName("cart-item");
  total = 0;

  for (let i = 0; i < items.length; i++) {
    let price = parseFloat(
      items[i].querySelector(".price").innerHTML.replace(" kr", "")
    );
    let quantity = items[i].querySelector("input").value;
    total = total + price * quantity;
  }
  document.querySelector(".cart-total").innerHTML = "total: " + total + " kr";
};

const MakeCartRows = () => {
  const cartContainer = document.querySelector(".cart-items-container");

  const itemArr = JSON.parse(localStorage.getItem("itemArr"));

  for (let i = 0; i < itemArr.length; i++) {
    let newItem = document.createElement("div");
    const newItemContent = `<div class="cart-item">
                <img src="${itemArr[i].src}" alt="" class="image">
                <h2 class="in-cart-title">${itemArr[i].title}</h2>
                <span class="price">${itemArr[i].price} kr</span><input value="${itemArr[i].quantity}" type="number" value="1" class="quantity" onchange="QuantityChange(this)">
                <button onclick="RemoveItemFromCart(this)" class="remove-btn">REMOVE</button>
                </div>`;

    newItem.innerHTML = newItemContent;
    cartContainer.append(newItem);
  }
};

const RefreshCartRows = () => {
  const cartContainer = document.querySelector(".cart-items-container");
  const cartRows = cartContainer.getElementsByClassName("cart-item");
  for (let i = 0; i < cartRows.length; i++) {
    cartRows[i].remove();
  }
};
