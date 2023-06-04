function addItem() {
    let ul = document.getElementById('items');
    const input = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = input;
}