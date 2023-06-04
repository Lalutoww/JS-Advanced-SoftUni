function solve() {
  // capture elements
  const menuToElement = document.getElementById("selectMenuTo");

  const numberInputElement = document.getElementById("input");
  const numberInputValue = numberInputElement.value;

  const resultElement = document.getElementById("result");

  // btn element
  const buttonElement = document.getElementsByTagName("button")[0];

  //binary menu element
  const binaryMenuElement = document.createElement("option");
  binaryMenuElement.textContent = "Binary";
  binaryMenuElement.value = "binary";
  menuToElement.appendChild(binaryMenuElement);

  // hexa menu element
  const hexadecimalMenuElement = document.createElement("option");
  hexadecimalMenuElement.textContent = "Hexadecimal";
  hexadecimalMenuElement.value = "hexadecimal";
  menuToElement.appendChild(hexadecimalMenuElement);

  // onclick
  buttonElement.addEventListener("click", () => {
    if (menuToElement.value === "binary") {
      resultElement.value = Number(numberInputElement.value).toString(2);
    } else if (menuToElement.value === "hexadecimal") {
      resultElement.value = Number(numberInputElement.value)
        .toString(16)
        .toUpperCase();
    }
  });
}
