var ulElement = document.createElement('ul');
var liElement = document.createElement('li');

var removeElement = document.createElement('button');
var inputElement = document.querySelector('.input');
// removeElement.setAttribute('value','Remove');
// removeElement.setAttribute('class','remove');

var buttonElement = document.querySelector('.button');
buttonElement.onclick = function addTodo() {
    // var inputElement = document.querySelector('.input');
    var liText = document.createTextNode(inputElement.value);
    
    var liElement = document.createElement('li');
    
    liElement.appendChild(liText);
    liElement.appendChild(removeElement);
    ulElement.appendChild(liElement);

    return inputElement.value = '';
}

removeElement.onclick = function removeTodo(){
    divElement.removeChild(ulElement);
}

var divElement = document.querySelector('#list');
divElement.appendChild(ulElement);


