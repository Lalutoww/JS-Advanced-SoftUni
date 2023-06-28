window.addEventListener('load', solve);

function solve() {
    //Get all inputs
    const modelInput = document.getElementById('car-model');
    const carYearInput = document.getElementById('car-year');
    const partNameInput = document.getElementById('part-name');
    const partNumberInput = document.getElementById('part-number');
    const condition = document.getElementById('condition');

    //Get other parts
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('ul.info-list');
    const confirmList = document.querySelector('ul.confirm-list');

    //Complete ordering cycle elements
    const completeImageElement = document.getElementById('complete-img');
    const completeTextElement = document.getElementById('complete-text');
    //Next button click
    nextBtn.addEventListener('click', nextHandler);

    function nextHandler(e) {
        e.preventDefault();
        const modelInputValue = modelInput.value;
        const carYearInputValue = Number(carYearInput.value);
        const partNameInputValue = partNameInput.value;
        const partNumberInputValue = Number(partNumberInput.value);
        const conditionValue = condition.value;

        if (
            !modelInputValue ||
            !partNameInputValue ||
            !partNumberInputValue ||
            !conditionValue ||
            !carYearInputValue ||
            carYearInputValue < 1980 ||
            carYearInputValue > 2023
        ) {
            return;
        }

        //Create li
        const li = document.createElement('li');
        li.classList.add('part-content');
        infoList.appendChild(li);
        const article = document.createElement('article');
        li.appendChild(article);

        const modelParagraph = document.createElement('p');
        modelParagraph.textContent = `Car Model: ${modelInputValue}`;
        const yearParagraph = document.createElement('p');
        yearParagraph.textContent = `Car Year: ${carYearInputValue}`;
        const partNameParagraph = document.createElement('p');
        partNameParagraph.textContent = `Part Name: ${partNameInputValue}`;
        const partNumberParagraph = document.createElement('p');
        partNumberParagraph.textContent = `Part Number: ${partNumberInputValue}`;
        const conditionParagraph = document.createElement('p');
        conditionParagraph.textContent = `Condition: ${conditionValue}`;

        article.appendChild(modelParagraph);
        article.appendChild(yearParagraph);
        article.appendChild(partNameParagraph);
        article.appendChild(partNumberParagraph);
        article.appendChild(conditionParagraph);

        //Create buttons
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        li.appendChild(continueBtn);

        clear();
        nextBtn.disabled = true;

        //Actions to complete the ordering cycle
        completeImageElement.style.visibility = 'hidden';
        completeTextElement.textContent = '';

        //Edit button functionality
        editBtn.addEventListener('click', editHandler);

        function editHandler() {
            e.preventDefault();
            modelInput.value = modelInputValue;
            carYearInput.value = carYearInputValue;
            partNameInput.value = partNameInputValue;
            partNumberInput.value = partNumberInputValue;
            condition.value = conditionValue;
            li.remove();
            nextBtn.disabled = false;
        }
        //Continue button functionality
        continueBtn.addEventListener('click', continueHandler);

        function continueHandler(e) {
            e.preventDefault();
            //Create New li
        const newLi = document.createElement('li');
        newLi.classList.add('part-content');
        infoList.appendChild(newLi);
        const article = document.createElement('article');
        newLi.appendChild(article);

        const modelParagraph = document.createElement('p');
        modelParagraph.textContent = `Car Model: ${modelInputValue}`;
        const yearParagraph = document.createElement('p');
        yearParagraph.textContent = `Car Year: ${carYearInputValue}`;
        const partNameParagraph = document.createElement('p');
        partNameParagraph.textContent = `Part Name: ${partNameInputValue}`;
        const partNumberParagraph = document.createElement('p');
        partNumberParagraph.textContent = `Part Number: ${partNumberInputValue}`;
        const conditionParagraph = document.createElement('p');
        conditionParagraph.textContent = `Condition: ${conditionValue}`;

        article.appendChild(modelParagraph);
        article.appendChild(yearParagraph);
        article.appendChild(partNameParagraph);
        article.appendChild(partNumberParagraph);
        article.appendChild(conditionParagraph);
        confirmList.appendChild(newLi);
        li.remove();

            //Create buttons
            const confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';
            newLi.appendChild(confirmBtn);

            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            newLi.appendChild(cancelBtn);

            //Edit button functionality
            confirmBtn.addEventListener('click', confirmHandler);

            function confirmHandler() {
                e.preventDefault();
                newLi.remove();
                nextBtn.disabled = false;
                completeImageElement.style.visibility = 'visible';
                completeTextElement.textContent = 'Part is Ordered!';
            }

            //Edit button functionality
            cancelBtn.addEventListener('click', cancelHandler);

            function cancelHandler() {
                e.preventDefault();
                newLi.remove();
                nextBtn.disabled = false;
            }
        }
    }
    function clear() {
        modelInput.value = '';
        carYearInput.value = '';
        partNameInput.value = '';
        partNumberInput.value = '';
        condition.value = '';
    }
}
