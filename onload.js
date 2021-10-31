//Event listener
document.getElementById('onload').addEventListener('click', onLoad);
//creating xmlrequest variable
var xhr = new XMLHttpRequest();
//opening the xhr
xhr.open('GET','onload.txt', true);

//Optional for loaders
xhr.onprogress = function(){
    console.log("Ready state: ", xhr.readyState);
}

function onLoad(){
//onload the function
xhr.onload = function(){
if(this.status === 200){
    document.getElementById('onload-button').innerHTML = this.responseText;
}
};
//Error
xhr.onerror = function(){
    console.log('Request Error....');
};

//sending the data to server
xhr.send();
}
