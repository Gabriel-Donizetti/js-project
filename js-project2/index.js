// GLOBAL VAR'S
var addElement = document.querySelector('#addTask');
var taksArea = document.querySelector('#tasks');

addElement.onclick = function addTask(){
    var inputTitleElement = document.createElement('input');
    inputTitleElement.setAttribute('class', 'inputTitle');
    var inputDescElement = document.createElement('input');
    inputDescElement.setAttribute('class','inputDesc');

    addElement.appendChild(inputTitleElement);
    addElement.appendChild(inputDescElement);
    addElement.appendChild(saveElement);
    
}

var saveElement = document.createElement('button');

saveElement.onclick = function saveElementButton(){
    taksArea.removeChild(inputDescElement);
    taksArea.removeChild(inputTitleElement);
    taksArea.removeChild(saveElement);
}

