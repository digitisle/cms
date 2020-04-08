const Contentstack = require("contentstack");
const express = require("express");
const app = express();
const port = 3001;

const Stack = Contentstack.Stack(
  "bltcbffb05672122629",
  "blt498c937423381d40",
  "local"
);

app.get("/api/home", (req, res) => {
  const Query = Stack.ContentType("page").Entry("bltf0d59f5436c8c723");
  Query.fetch().then(
    function success(entry) {
      res.json(entry.toJSON()); // Convert the entry result object to JSON
    },
    function error(err) {
      res.status(500);
      res.send(err);
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
