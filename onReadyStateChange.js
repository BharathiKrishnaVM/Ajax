//creating the event listener
document.getElementById('onReadyState').addEventListener('click', onReady);

//Creating XHR method
var xhr = new XMLHttpRequest();

//Open
xhr.open('GET', 'onReadyStateChange.txt', true);

//function to call
function onReady(){
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('onready').innerHTML = this.responseText;
    }
    else if(this.readyState == 4 && this.status == 404)
    {
        console.log('File not found.... Recheck the file name');
    }
};
//Sendint the request
xhr.send();
}




