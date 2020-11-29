var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector('#txt-input');
var outputDiv=document.querySelector('#txt-output');



function clickHandler(){
    outputDiv.innerText="hello "+ txtInput.value; 
}

btnTranslate.addEventListener("click",clickHandler)

