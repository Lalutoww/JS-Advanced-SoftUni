function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const inputToLowerCase = document
      .getElementById("searchField")
      .value.toLowerCase();
    const rowsArray = document.querySelectorAll("tbody tr");

    for (const row of rowsArray) {
      const rowToLowerCase = row.textContent.toLowerCase();
      if (rowToLowerCase.includes(inputToLowerCase)) {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
    }
  }
}
