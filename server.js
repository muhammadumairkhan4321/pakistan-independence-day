const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".mp3": "audio/mpeg",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png"
};

const server = http.createServer((req, res) => {

    let filePath;

    if (req.url === "/") {
        filePath = path.join(__dirname, "index.html");
    } else {
        filePath = path.join(
            __dirname,
            decodeURIComponent(req.url)
        );
    }

    // Security: don't allow access outside project folder
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
    }

    fs.readFile(filePath, (error, data) => {

        if (error) {

            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            res.end("File not found");
            return;
        }

        const extension = path.extname(filePath);

        const contentType =
            mimeTypes[extension] ||
            "application/octet-stream";

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(data);
    });
});


server.listen(PORT, () => {

    console.log("");
    console.log("🇵🇰 Pakistan Independence Day");
    console.log("--------------------------------");
    console.log(`Website running at: http://localhost:${PORT}`);
    console.log("Press CTRL + C to stop the server.");
    console.log("");
});