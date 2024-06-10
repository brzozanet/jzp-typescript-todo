const input1Element = document.querySelector("#input1");
const input2Element = document.querySelector("#input2");
const button1Element = document.querySelector("button");
const add = (num1, num2) => num1 + num2;
button1Element.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
});
