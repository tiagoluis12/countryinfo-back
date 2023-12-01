const app = require("./src/app");

const port = process.env.PORT || 3001;

app.listen(port, () => {
  host: "RENDER" in process.env ? "0.0.0.0" : "localhost",
    console.log(`Server listening on port ${port}`);
});
