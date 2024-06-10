const input1Element: HTMLInputElement = document.querySelector("#input1");
const input2Element: HTMLInputElement = document.querySelector("#input2");
const buttonElement = document.querySelector("button");

const add = (num1: number, num2: number) => num1 + num2;

buttonElement.addEventListener("click", () => {
  const sum = add(Number(input1Element.value), Number(input2Element.value));
  console.log(sum);
});
