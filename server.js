const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = jsonServer.create();
const router = jsonServer.router("./db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 644,
  userCart: 640,
  products: 444,
  ratingProducts: 644,
  regionCoordinates: 444,
  userAddress: 660,
});

app.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
