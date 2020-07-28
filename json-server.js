const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "PUT" && !req.params.id) {
        req.url = req.url + "/" + req.body.id;
    }
    // Continue to JSON Server router
    next();
});
server.use("/api", router);
server.use(router);

// If you want to target /posts specifically
router.render = function (req, res) {
    res.jsonp({
        data: res.locals.data,
        success: true
    });
};

server.listen(3004, () => {
    console.log("JSON Server is running");
});
