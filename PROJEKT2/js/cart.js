
const AddToCartClicked = (t) => {
  const imageSrc = t.parentElement.parentElement.querySelector(".image").src;
  const title = t.parentElement.querySelector(".title").innerHTML;
  const price = t.parentElement
    .querySelector(".price")
    .innerHTML.replace(" kr", "");

    const quantity = t.parentElement.dataset.quantity;
    console.log(quantity);

  const item = {
    title: `${title}`,
    src: `${imageSrc}`,
    price: `${price}`,
    quantity: `${quantity}`,
  };

  let itemArr = [];
  if (JSON.parse(localStorage.getItem("itemArr")) !== null) {
    itemArr = JSON.parse(localStorage.getItem("itemArr"));
  }

  for (let i = 0; i < itemArr.length; i++) {
    if (itemArr[i].title == title) {
      return;
    }
  }
  itemArr.push(item);

  localStorage.setItem("itemArr", JSON.stringify(itemArr));
};
