//creating dom using event listener
 document.getElementById('user').addEventListener('click', ajaxUser);

//function to call ajaxUser
function ajaxUser(){
//Creating xhr object
var xhr = new XMLHttpRequest();
    
//Open
xhr.open('GET', 'user.json', true);
    
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200){
          //  console.log("Ready state: ", xhr.readyState);
            var user = JSON.parse(xhr.responseText);
            var output = '';
            for(var i in user){
            output += '<ul>' +
            '<li> Name: ' +user[i].name+ '</li>' +
            '<li> Experience: ' +user[i].experience+ '</li>' +
            '<li> Current Company: ' +user[i].currentCompany+ '</li>' +
            '<li> Designation: ' +user[i].designation+ '</li>' +
            '</ul>';
            
            }
          }
          document.getElementById('user1').innerHTML = output;
        };
    
        xhr.send();
}
    