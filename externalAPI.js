//document.getElementById('btn').addEventListener('click', getUsers);

function getUsers(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true);
    console.log('Ready state: '+xhr.readyState);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            console.log('Ready state: '+xhr.readyState);
            var userDetails = JSON.parse(xhr.responseText);
            var output = '';
            
            for(var i in userDetails){
                output += 
                '<div class = "user">' +
                '<img src= "'+userDetails[i].avatar_url+'" width = "70" height = "70">' + 
                '<ul>' + 
                '<li> ID: '+userDetails[i].id+ '</li>' +
                '<li> Login: '+userDetails[i].login+ '</li>' +
                '</ul>' + '</div>';

            }
            document.getElementById('apiUsers').innerHTML = output;
        }
        
    };
    xhr.send();
}