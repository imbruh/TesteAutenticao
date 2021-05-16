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
    result += `Status: ${response.status}`
    console.log(response);
    if (response.status === 'connected') {
        console.log("logged in!")   
        FB.api('/me', function(response) {
            console.log(response.name)
            result += `Usuario: ${response.name}`;
        });
    } else {
         console.log('please login')
    }
    infos.innerHTML = result
}

// app.listen(3000)