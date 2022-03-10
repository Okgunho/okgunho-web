// use the express module
import express from "express"

// create an object of the express module
const app = express();

// root 경로에 접근 시 다음 callback 함수 호출
app.get("/", (req, res) => {
    // send "Hello, World!" response to the browser
    res.send("Hello, World!");
});

const PORT = 3000;

const handleListen = () => {
    console.log(`The server is running on the port ${PORT}`
}

// make the server listen on port 3000
app.listen(PORT, handleListen);