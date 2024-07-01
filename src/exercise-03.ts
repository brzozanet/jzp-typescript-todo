const button2Element: HTMLButtonElement = document.querySelector("button");

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
  if (hasDiscount) {
    return originalPrice * 0.8;
  } else {
    return originalPrice;
  }
};

button2Element.addEventListener("click", () => {
  const originalPrice: number = 100;
  const hasDiscount: boolean =
    new URLSearchParams(window.location.search).get("discount") === "true";

  console.log(hasDiscount);
  console.log(calculatePrice(originalPrice, hasDiscount));
});
