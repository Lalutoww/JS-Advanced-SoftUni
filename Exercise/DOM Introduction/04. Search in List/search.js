function search() {
  const listCollection = Array.from(document.querySelectorAll("li"));
  const input = document.getElementById("searchText").value;
  const result = document.getElementById("result");

  let sum = 0;

  for (const searchItem of listCollection) {
    let lowerCaseSearch = input.toLowerCase();
    let searchItemToLower = searchItem.textContent.toLowerCase();
    if (searchItemToLower.includes(lowerCaseSearch)) {
      searchItem.style.fontWeight = "bold";
      searchItem.style.textDecoration = "underline";
      sum++;
    } else {
      searchItem.style.fontWeight = "";
      searchItem.style.textDecoration = "";
    }
  }

  result.textContent = `${sum} matches found`;
}
