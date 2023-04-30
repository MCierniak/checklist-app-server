import { createServer } from 'http';

import {get_IPv4} from './utils'

const IP = get_IPv4();
const PORT = process.env.PORT || 3080;

var server = createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" }); 
        res.write("<html><body><p>This is the backend.</p></body></html>");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Backend server online at ${IP}:${PORT}`)
});