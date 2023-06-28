window.addEventListener('load', solve);

function solve() {
    //Get all inputs
    const makeInput = document.getElementById('make');
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const fuelInput = document.getElementById('fuel');
    const originalCostInput = document.getElementById('original-cost');
    const sellingPriceInput = document.getElementById('selling-price');

    //Get other elements
    const publishBtn = document.getElementById('publish');
    const tableBody = document.getElementById('table-body');
    const carsList = document.getElementById('cars-list');
    const profit = document.getElementById('profit');

    //publishButton function definition
    publishBtn.addEventListener('click', clickHandler);

    function clickHandler(e) {
        e.preventDefault();
        const makeInputValue = makeInput.value;
        const modelInputValue = modelInput.value;
        const yearInputValue = yearInput.value;
        const fuelInputValue = fuelInput.value;
        const originalCostInputValue = Number(originalCostInput.value);
        const sellingPriceInputValue = Number(sellingPriceInput.value);
        if (
            !makeInputValue ||
            !modelInputValue ||
            !yearInputValue ||
            !fuelInputValue ||
            originalCostInputValue > sellingPriceInputValue
        ) {
            return;
        }

        const tr = document.createElement('tr');
        tr.classList.add('row');
        tableBody.appendChild(tr);

        const makeTd = document.createElement('td');
        makeTd.textContent = makeInputValue;
        const modelTd = document.createElement('td');
        modelTd.textContent = modelInputValue;
        const yearTd = document.createElement('td');
        yearTd.textContent = yearInputValue;
        const fuelTd = document.createElement('td');
        fuelTd.textContent = fuelInputValue;
        const originalPriceTd = document.createElement('td');
        originalPriceTd.textContent = originalCostInputValue;
        const sellingPriceTd = document.createElement('td');
        sellingPriceTd.textContent = sellingPriceInputValue;
        const buttonsTd = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('action-btn','edit');
        buttonsTd.appendChild(editButton);
        const sellButton = document.createElement('button');
        sellButton.classList.add('action-btn','sell');
        sellButton.textContent = 'Sell';
        buttonsTd.appendChild(sellButton);
        clear();

        //Append all children
        tr.appendChild(makeTd);
        tr.appendChild(modelTd);
        tr.appendChild(yearTd);
        tr.appendChild(fuelTd);
        tr.appendChild(originalPriceTd);
        tr.appendChild(sellingPriceTd);
        tr.appendChild(buttonsTd);

        //add inner button callbacks
        editButton.addEventListener('click', editHandler);
        sellButton.addEventListener('click', sellHandler);

        function editHandler(e) {
            e.preventDefault();
            makeInput.value = makeInputValue;
            modelInput.value = modelInputValue;
            yearInput.value = yearInputValue;
            fuelInput.value = fuelInputValue;
            originalCostInput.value = originalCostInputValue;
            sellingPriceInput.value = sellingPriceInputValue;
            tr.remove();
        }
        function sellHandler(e) {
            e.preventDefault();
            const li = document.createElement('li');
            li.classList.add('each-list');
            carsList.appendChild(li);

            const makeModelSpan = document.createElement('span');
            makeModelSpan.textContent = `${makeInputValue} ${modelInputValue}`;
            li.appendChild(makeModelSpan);

            const yearSpan = document.createElement('span');
            yearSpan.textContent = yearInputValue;
            li.appendChild(yearSpan);

            const priceSpan = document.createElement('span');
            priceSpan.textContent = Math.abs(
                sellingPriceInputValue - originalCostInputValue
            );
            li.appendChild(priceSpan);
            tr.remove();

            profit.textContent = (
                Number(profit.textContent) + Number(priceSpan.textContent)
            ).toFixed(2);
        }
    }
    function clear() {
        makeInput.value = '';
        modelInput.value = '';
        yearInput.value = '';
        fuelInput.value = '';
        originalCostInput.value = '';
        sellingPriceInput.value = '';
    }
}
