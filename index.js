const http = require('http');

const app = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text:html'});
	res.end('<h1>On the node again!</h1>');
})

app.listen(3142, 'localhost');
console.log(('Server running at port 3142'));
