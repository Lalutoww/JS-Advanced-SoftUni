function addItem() {
    //Get items
    const menu = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const newItem = document.createElement('option');
    newItem.textContent = text.value;
    newItem.value = value.value;
    menu.appendChild(newItem);

    text.value = '';
    value.value = '';
}