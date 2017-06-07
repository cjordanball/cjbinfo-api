const http = require('http');

const app = http.createServer((req, res) => {
<<<<<<< Updated upstream
	res.writeHead(200, {'Content-Type': 'text:html'});
=======
	res.writeHead(200, {'Content-Type': 'text/html'});
>>>>>>> Stashed changes
	res.end('<h1>On the node again!</h1>');
})

app.listen(3142, 'localhost');
console.log(('Server running at port 3142'));
