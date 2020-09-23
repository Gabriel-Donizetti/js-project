var botaoElement = document.querySelector('#botao');
var ulElement = document.createElement('ul');

botaoElement.onclick = function createText(){
    var inputElment = document.querySelector('#input');
    //var inputValue = inputElment.value;
    var liElement = document.createElement('li');
    var liText = document.createTextNode(inputElment.value)
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);

}


var divElement = document.querySelector('#app');
divElement.appendChild(ulElement);





    