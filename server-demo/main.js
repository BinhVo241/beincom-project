const jsonServer = require("json-server");
const auth = require("json-server-auth");
// const querystring = require("node:querystring");

const port = 4000;
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.db = router.db;
// Add custom routes before JSON Server router
// server.get("/echo", (req, res) => {
//   res.jsonp(req.query);
// });

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === "PATCH") {
    req.body.updatedAt = Date.now();
  }

  // Continue to JSON Server router
  next();
});

// router.render = (req, res) => {
//   // Check GET with pagination
//   // If yes, custom output
//   const headers = res.getHeaders();
//   // console.log("DEBUG ~ file: main.js:37 ~ headers:", headers);

//   const totalCountHeader = headers["x-total-count"];
//   if (req.method === "GET" && totalCountHeader) {
//     const queryParams = querystring.parse(req._parsedUrl.query);

//     const result = {
//       data: res.locals.data,
//       pagination: {
//         _page: Number.parseInt(queryParams._page) || 1,
//         _limit: Number.parseInt(queryParams._limit) || 10,
//         _totalRows: Number.parseInt(totalCountHeader),
//       },
//     };

//     return res.jsonp(result);
//   }

//   // Otherwise, keep default behavior
//   res.jsonp(res.locals.data);
// };

// Load and apply custom routes
// const routes = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "routes.json"), "utf-8")
// );

const rules = auth.rewriter({
  "/posts?id=:id": "/posts/:id",
  "/posts?id=:id/comments": "/posts/:id/comments",
});

// Use default router
server.use(rules);
// server.use(jsonServer.rewriter(routes));
server.use(auth);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
