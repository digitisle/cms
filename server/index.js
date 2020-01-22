const Contentstack = require("contentstack");
const express = require("express");
const app = express();
const port = 3001;

const Stack = Contentstack.Stack(
  "blt96987392ab8fa57d",
  "bltbf47eb0fe14918eb",
  "local"
);

app.get("/api/home", (req, res) => {
  const Query = Stack.ContentType("page").Entry("blt786700107042dc28");
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
