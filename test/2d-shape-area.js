const axios = require("axios");

axios
  .get(
    "https://math-rockz-api.iamashuu397.repl.co/2d-shapes-area/rectangle?length=10&breadth=7&unit=m"
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
