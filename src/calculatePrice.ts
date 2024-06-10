const button2Element = document.querySelector("button");
const originalPrice: number = 1490;
const discountPercentage: number = 20;
let customerPrice: number;

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
  if (hasDiscount) {
    return (customerPrice =
      originalPrice - originalPrice * (discountPercentage / 100));
  } else {
    return (customerPrice = originalPrice);
  }
};

button2Element.addEventListener("click", () => {
  const hasDiscount: boolean =
    new URLSearchParams(window.location.search).get("discount") === "true";
  console.log(calculatePrice(originalPrice, hasDiscount));
});
