const axios = require("axios");

axios
  .get(
    "https://math-rockz-api.iamashuu397.repl.co/3d-shapes-area/cuboid?length=10&breadth=7&height=3&unit=m"
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
