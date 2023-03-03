# All in One Calculator API

API that returns areas of different 2D and 3D shapes and also volumes of different 3D shapes

**Basic API Endpoint** - *https://math-rockz-api.iamashuu397.repl.co/*

## Endpoints for 2D Shapes Area

| Endpoint                                                                                                 | Query                      | Method | Use                                |
| -------------------------------------------------------------------------------------------------------- | -------------------------- | ------ | ---------------------------------- |
| [/2d-shapes-area/rectangle](https://math-rockz-api.iamashuu397.repl.co/2d-shapes-area/rectangle)         | length, breadth, unit      | GET    | To get the area of a rectangle     |
| [/2d-shapes-area/square](https://math-rockz-api.iamashuu397.repl.co/2d-shapes-area/square)               | side, unit                 | GET    | To get the area of a square        |
| [/2d-shapes-area/triangle](https://math-rockz-api.iamashuu397.repl.co/2d-shapes-area/triangle)           | base, height, unit         | GET    | To get the area of a triangle      |
| [/2d-shapes-area/circle](https://math-rockz-api.iamashuu397.repl.co/2d-shapes-area/circle)               | radius, unit               | GET    | To get the area of a circle        |
| [/2d-shapes-area/parallelogram](https://math-rockz-api.iamashuu397.repl.co/2d-shapes-area/parallelogram) | base, height, unit         | GET    | To get the area of a parallelogram |
| [/2d-shapes-area/triangle](https://math-rockz-api.iamashuu397.repl.co/2d-shapes-area/triangle)           | diagonal1, diagonal2, unit | GET    | To get the area of a rhombus       |

## Endpoints for 3D Shapes Area

| Endpoint                                                                                       | Query                         | Method | Use                           |
| ---------------------------------------------------------------------------------------------- | ----------------------------- | ------ | ----------------------------- |
| [/3d-shapes-area/cuboid](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-area/cuboid)     | length, breadth, height, unit | GET    | To get the area of a cuboid   |
| [/3d-shapes-area/cube](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-area/cube)         | edge, unit                    | GET    | To get the area of a cube     |
| [/3d-shapes-area/cylinder](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-area/cylinder) | radius, height, unit          | GET    | To get the area of a cylinder |
| [/3d-shapes-area/cone](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-area/cone)         | radius, height, unit          | GET    | To get the area of a cone     |
| [/3d-shapes-area/sphere](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-area/sphere)     | radius, unit                  | GET    | To get the area of a sphere   |

## Endpoints for 3D Shapes Volume

| Endpoint                                                                                           | Query                         | Method | Use                             |
| -------------------------------------------------------------------------------------------------- | ----------------------------- | ------ | ------------------------------- |
| [/3d-shapes-volume/cuboid](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-volume/cuboid)     | length, breadth, height, unit | GET    | To get the volume of a cuboid   |
| [/3d-shapes-volume/cube](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-volume/cube)         | edge, unit                    | GET    | To get the volume of a cube     |
| [/3d-shapes-volume/cylinder](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-volume/cylinder) | radius, height, unit          | GET    | To get the volume of a cylinder |
| [/3d-shapes-volume/cone](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-volume/cone)         | radius, height, unit          | GET    | To get the volume of a cone     |
| [/3d-shapes-volume/sphere](https://math-rockz-api.iamashuu397.repl.co/3d-shapes-volume/sphere)     | radius, unit                  | GET    | To get the volume of a sphere   |

# Example

**2D Shape Area**

```js
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
```

**3D Shape Area**

```js
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
```

**3D Shape Volume**

```js
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
```
