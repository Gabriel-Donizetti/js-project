var buttonElement = document.querySelector('#button');
var inputElement = document.querySelector('#input');

buttonElement.onclick = function createTask(){
    var liElement = document.createElement('li');
    var text = document.createTextNode(inputElement.value);
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove');
    var removeText = document.createTextNode('-');
    removeButton.appendChild(removeText);

    liElement.appendChild(text);
    liElement.appendChild(removeButton);

    var divElement = document.querySelector('#task');
    divElement.appendChild(liElement);
    console.log(divElement);
    console.log(liElement);

    inputElement.value = '';
}


function renderElements(){

}
