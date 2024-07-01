const button2Element = document.querySelector("button");
const calculatePrice = (originalPrice, hasDiscount) => {
    if (hasDiscount) {
        return originalPrice * 0.8;
    }
    else {
        return originalPrice;
    }
};
button2Element.addEventListener("click", () => {
    const originalPrice = 100;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(hasDiscount);
    console.log(calculatePrice(originalPrice, hasDiscount));
});
