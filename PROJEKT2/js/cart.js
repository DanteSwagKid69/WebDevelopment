if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", Ready);
} else {
  Ready();
}

function Ready() {
  UpdateCartTotal();
}

const AddToCartClicked = (t) => {
  const cartContainer = document.querySelector(".cart-items-container");
  const imageSrc = t.parentElement.querySelector(".image").src;
  const title = t.parentElement.querySelector(".title").innerHTML;
  const price = t.parentElement
    .querySelector(".price")
    .innerHTML.replace(" kr", "");

  let items = Array.from(document.querySelector(".cart-items-container").children);
    const itemNames = document.getElementsByClassName("in-cart-title");
  for (let i = 0; i < itemNames.length; i++) {
    if (itemNames[i].textContent == title)
    {
        return;
    }
  }


  let newItem = document.createElement("div");
  const newItemContent = `<div class="cart-item">
    <img src="${imageSrc}" alt="" class="image">
    <h2 class="in-cart-title">${title}</h2>
    <span class="price">${price} kr</span>
    <input type="number" value="1" class="quantity" onchange="QuantityChange(this)">
    <button onclick="RemoveItemFromCart(this)" class="remove-btn">REMOVE</button>
    </div>`;

  newItem.innerHTML = newItemContent;
  cartContainer.append(newItem);

  UpdateCartTotal();
};

const QuantityChange = (t) => {
  if (t.value <= 0) t.value = 1;
  UpdateCartTotal();
};

const RemoveItemFromCart = (t) => {
  t.parentElement.remove();
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
