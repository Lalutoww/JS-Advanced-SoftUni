function create(words) {
   //ForOf to add div and paragraph for all sections
  for (const word of words) {
    const div = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = word;
    paragraph.style.display = "none";
    div.appendChild(paragraph);

    //Add onClick event
    div.addEventListener("click", clickHandler);

    //Access the content div {parent of all divs}
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(div);

    //Define function
    function clickHandler() {
      paragraph.style.display = "block";
    }
  }
}
