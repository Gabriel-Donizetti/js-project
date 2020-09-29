var buttonElement = document.querySelector('#button');
var inputElement = document.querySelector('#input');

inputElement.onmouseover = function(){
    inputElement.style.width = '150px';
    inputElement.style.transitionDuration = '0.7s';
}
inputElement.onmouseout = function(){
    inputElement.style.width = '20px';
    inputElement.style.transitionDuration = '0.7s';
}

buttonElement.onclick = function createTask(){
    var divTaskElement = document.createElement('div');
    divTaskElement.setAttribute('class', 'div');
    var headerElement = document.createElement('header');
    headerElement.setAttribute('class', 'headerDiv');
    divTaskElement.appendChild(headerElement);

    var text = document.createTextNode(inputElement.value);
    
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove');
    var removeText = document.createTextNode('-');
    removeButton.appendChild(removeText);

    headerElement.appendChild(text);
    headerElement.appendChild(removeButton);

    var divElement = document.querySelector('#task');
    divElement.appendChild(divTaskElement);
    console.log(divElement);
    console.log(divTaskElement);

    inputElement.value = '';
}


function renderElements(){

}
