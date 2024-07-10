const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = 8000;

const MIME_TYPES = {
    default: "text/html; charset=UTF-8",
    html: "text/html; charset=UTF-8",
    js: "application/javascript",
    css: "text/css",
    png: "image/png",
    jpg: "image/jpg",
    gif: "image/gif",
    ico: "image/x-icon",
    svg: "image/svg+xml",
};

// init static path
const STATIC_PATH = path.join(process.cwd(), "./");

// struct for promise res/rej toBool
const promise2BoolArr = [() => true, () => false];

const prepareFile = async (url) => {
    // url handling
    const paths = [STATIC_PATH, url];
    if (url.endsWith("/")) {
        paths.push("index.html");
    }

    // find asset
    const filePath = path.join(...paths);
    const pathTraversal = !filePath.startsWith(STATIC_PATH);
    const exists = await fs.promises.access(filePath).then(...promise2BoolArr);

    // return object
    if (!exists) {
        return { found: false }
    }

    return {
        found: !pathTraversal && exists,
        ext: path.extname(filePath).substring(1).toLowerCase(),
        stream: fs.createReadStream(filePath),
    }
};

http
    .createServer(async (req, res) => {
        const file = await prepareFile(req.url);

        // resource not found return 404
        if (!file.found) {
            res.writeHead(404);
            res.end();
            return;
        }

        // send successful response
        const statusCode = file.found ? 200 : 404;
        const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
        res.writeHead(statusCode, { "Content-Type": mimeType });
        file.stream.pipe(res);

        // log request
        console.log(`${req.method} ${req.url} ${statusCode}`);
    })
    .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
