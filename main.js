// const express = require('express')
// const app = express()

// app.use(express.static(__dirname))

// app.get('/*', (req, res) => 
//     res.sendFile(__dirname + 'index.html') 
// )

let result = ''
const infos = document.querySelector('.info')

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    result += `<div> Status: ${response.status} </div>`
    console.log(response);
    if (response.status === 'connected') {
        console.log("logged in!")   
        FB.api('/me', {fields: 'name'}, function(response) {
            console.log(response)
            result += `<div> Usuario: ${response.name} </div>`;
        });
    } else {
         console.log('faça o login')
    }
    infos.innerHTML = result
}

// app.listen(3000)