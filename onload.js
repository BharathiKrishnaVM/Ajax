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
if(this.status == 200){
    document.getElementById('onload-button').innerHTML = this.responseText;

//     var onload = JSON.parse(this.responseText);
//     var output = '<ul>' +
//     '<li>Status code: 200 - Ok</li>' +
//     '<li>Status code: 404 - Not found</li>' +
//     '<li>Status code: 403 - Forbidden</li>' +
//     '</ul>' ;

//    console.log(this.responseText);
}
};
//Error
xhr.onerror = function(){
    console.log('Request Error....');
};

//sending the data to server
xhr.send();
}
