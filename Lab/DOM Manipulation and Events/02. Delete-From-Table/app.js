function deleteByEmail() {
  //Get emails
  const inputEmail = document.getElementsByName("email")[0].value; //input
  let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");

  for (let email of secondColumn) // td = tableData
    if (email.textContent == inputEmail) {
      let row = email.parentNode; // returns Name and Email table row
      row.parentNode.removeChild(row); // returns table body and deletes the selected row
      document.getElementById("result").textContent = "Deleted.";
      return;
    }
    document.getElementById("result").textContent = "Not found.";
}
