const h1Element = document.querySelector("h1");
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = "Hello, World!";

const btnE1 = document.querySelector("button");
const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log("Button clicked!");
};
btnE1.addEventListener("click", helloFn);
