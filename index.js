//this is what we want in every one of this type

//(choose a high port number, to avoid problems...it goes up to 65000)
const listenPort = 5454;
let express = require('express');
let path = require('path');
let app = express();
//now you can create a website
app.set("view engine", "ejs");//allows for dynamic pages

//get it to listen to the right port
app.listen(listenPort, function() {
    console.log("Oh, I can feel it..." + listenPort);
});

/*all of my bootstrap/website files are in the directory called "public", 
so all I need to do is use this line of code and exress will automatically
go to index.html*/
app.use(express.static("public"));

//I just put this here. Idk how to really do anything with it yet
app.get('/render', function(req,res) {
    res.render("index");
});

//apt 19 IP address: 192.168.1.138
//apt 19 IP address: 192.168.1.14 (43)
//192.168.1.4