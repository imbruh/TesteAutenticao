// const express = require('express')
// const app = express()

// app.use(express.static(__dirname))

// app.get('/*', (req, res) => 
//     res.sendFile(__dirname + 'index.html') 
// )


const info1 = document.querySelector('.info-status')
const info2 = document.querySelector('.info-user')

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    info1.innerHTML = `Status: ${response.status}`
    console.log(response);
    if (response.status === 'connected') {
        console.log("logged in!")   
        FB.api('/me', {fields: 'name'}, function(response) {
            console.log(response)
            info2.innerHTML = `Usuario: ${response.name}`;
        });
    } else {
         info2.innerHTML = 'faça o login'
    }
}

// app.listen(3000)