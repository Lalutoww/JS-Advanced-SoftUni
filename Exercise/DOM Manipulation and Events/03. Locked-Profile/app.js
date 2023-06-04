function lockedProfile() {
  //constants
  const SHOW_MORE = "Show more";
  const HIDE_IT = "Hide it";

  //Get buttons
  const buttons = Array.from(document.querySelectorAll("button"));
  buttons.map((x) => x.addEventListener("click", clickHandler));

  function clickHandler(e) {
    const divChildren = Array.from(e.target.parentElement.children);
    const isLocked = divChildren[2].checked;

    if (isLocked) {
      return;
    }

    const hiddenElements = e.target.previousElementSibling; // returns item above the button {in this case the hidden items element}

    if (e.target.textContent === "Show more") {
      hiddenElements.style.display = "inline";
      e.target.textContent = HIDE_IT;
      return;
    }

    hiddenElements.style.display = "";
    e.target.textContent = SHOW_MORE;
    return;
  }
}ˆ