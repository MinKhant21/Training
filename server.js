const app = require("./src/app");
const port = 40000;
app.listen(port, () => {
  console.log(`Server is Running ${port}`);
});
