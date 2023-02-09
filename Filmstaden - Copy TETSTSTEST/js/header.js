const leftHeader = document.querySelector(".left-header");
const hoverParts = Array.from(leftHeader.children);
console.log(hoverParts);

for (let i = 0; i < hoverParts.length; i++) {

  hoverParts[i].addEventListener("mouseover", (e) => {
    const hoverRect = hoverParts[i].querySelector(".header-hover-rect");
    const hoverPartWidth = hoverParts[i].getBoundingClientRect().width;
    hoverRect.style.width = hoverPartWidth + "px";
    hoverRect.style.bottom = 0 + "px";
  });

  hoverParts[i].addEventListener("mouseout", e => {
    const hoverRect = hoverParts[i].querySelector(".header-hover-rect");
    const hoverPartWidth = hoverParts[i].getBoundingClientRect().width;
    hoverRect.style.bottom = -4 + "px";
  })
}
