//Event listener
document.getElementById('onload').addEventListener('click', onLoad);

function onLoad(){
    
    //creating xmlrequest variable
    var xhr = new XMLHttpRequest();

    //opening the xhr
    xhr.open('GET', 'onload.html', true);

    //onload the function
    xhr.onload = function(){
        if(this.status = 200){
            console.log(this.responseText);
            
        }
    }
    //sending the data to server
    xhr.send();
}