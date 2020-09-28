var buttonElement = document.querySelector('#button');
var inputElement = document.querySelector('#input');
var removeButton = document.createElement('button');
removeButton.value = 'Remove';

buttonElement.onclick = function createTask(){
    var divTaskElement = document.createElement('div');
    var text = document.createTextNode(inputElement.value);

    divTaskElement.appendChild(text);
    divTaskElement.appendChild(removeButton);

    var divElement = document.querySelector('#task');
    divElement.appendChild(divTaskElement);
    console.log(divElement);
    console.log(divTaskElement);

    inputElement.value = '';
}

