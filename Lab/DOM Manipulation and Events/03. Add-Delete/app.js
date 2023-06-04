function addItem() {
    //Get items
    const input = document.getElementById('newItemText').value;
    const ul = document.getElementById('items');

    //Write logic for new item
    const newItem = document.createElement('li');
    newItem.textContent = input;
    ul.appendChild(newItem);

    //Add delete anchor to the button
    const anchor = document.createElement('a');
    anchor.textContent =  '[Delete]';
    anchor.href = '#';
    newItem.appendChild(anchor);
    
    //Add delete logic
    anchor.addEventListener('click', deleteHandler);

    function deleteHandler(event){
        newItem.remove();
    }
}