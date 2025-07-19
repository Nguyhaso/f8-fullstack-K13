const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Enable CORS for frontend on Vercel
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // for public
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
