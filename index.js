const express = require('express');
const app = express();
app.listen(3001);

app.use(express.static('./assests'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});
app.get('/about', (rer, res) => {
    res.sendFile(__dirname + '/view/about.html');

});
app.get('/contact', (rer, res) => {
    res.sendFile(__dirname + '/view/contact.html');

});
app.get('/post', (rer, res) => {
    res.sendFile(__dirname + '/view/post.html');

});
app.get('/login', (rer, res) => {
    res.sendFile(__dirname + '/view/login.html');

});
app.get('/admin', (req, res) => {
    if (req.url.includes("/admin?role=admin")) {
        res.send("<h1> hi admin</h1>");
        res.end();
    } else
        res.sendFile(__dirname + '/view/login.html');



});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/view/error404.html');
    console.log(res.url);

})