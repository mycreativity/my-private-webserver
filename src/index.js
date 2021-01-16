const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const projectFolder = "/Users/jaspersteenweg/Projects";
const defaultWebPages = ["index.html", "index.htm"];

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == '/') {
    // HOME!
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("My Personal Webserver");
    return;
  }

  var segments = req.url.split('/', 10);
  var folder = segments[1];
  var projectFolderSubpathOs = req.url.substr(`/${folder}`.length, req.url.length - `/${folder}`.length);
  var filePathOs = `${projectFolder}/${folder}${projectFolderSubpathOs}`;

  // Not found?
  if (!fs.existsSync(filePathOs)) {
    // 404!
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end("File not found!");
    return;
  }

  // Type of file?
  var extension = path.extname(filePathOs);
  var contentType = getContentTypeByExtension(extension);

  // File exists, let's read it
  res.writeHead(200,{'content-type':contentType});
  fs.createReadStream(filePathOs).pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function getContentTypeByExtension(extension) {
  switch(extension.toLowerCase()) {
    case ".jpg":
    case ".jpeg": 
      return "image/jpg";

    case ".png":
      return "image/png";

    case ".gif":
      return "image/gif";
    
    case ".html":
      return "text/html";
    
    case ".json":
      return "application/json";
    
    case ".css":
      return "text/css";
    
    case ".js":
      return "application/javascript";

    default: 
      return "text/plain";
  }    
}