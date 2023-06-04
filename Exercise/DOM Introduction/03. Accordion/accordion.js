function toggle() {
  let buttonText = document.getElementsByClassName("button")[0];
  let textItem = document.getElementById("extra");

  buttonText.textContent = buttonText.textContent === "More" ? "Less" : "More";

  textItem.style.display =
    textItem.style.display === "none" || textItem.style.display === ""
      ? "block"
      : "none";
}
