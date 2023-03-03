const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.redirect(
    "https://github.com/iamashuu397/All-in-One-Calculator-API#readme"
  );
});

app.get("/2d-shapes-area/rectangle", (req, res) => {
  const { length, breadth, unit } = req.query;
  const area = length * breadth;

  if (!length || !breadth || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      length: length.toLocaleString(),
      breadth: breadth.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/2d-shapes-area/square", (req, res) => {
  const { side, unit } = req.query;
  const area = side * side;

  if (!side || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      side: side.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/2d-shapes-area/triangle", (req, res) => {
  const { base, height, unit } = req.query;
  const area = (1 / 2) * base * height;

  if (!base || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      base: base.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/2d-shapes-area/circle", (req, res) => {
  const { radius, unit } = req.query;
  const area = (22 / 7) * radius * radius;

  if (!radius || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      radius: radius.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/2d-shapes-area/parallelogram", (req, res) => {
  const { base, height, unit } = req.query;
  const area = base * height;

  if (!base || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      base: base.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/2d-shapes-area/rhombus", (req, res) => {
  const { diagonal1, diagonal2, unit } = req.query;
  const area = (1 / 2) * diagonal1 * diagonal2;

  if (!diagonal1 || !diagonal2 || !unit) {
    res.send({
      message: "Missing query",
      status: 200,
    });
  } else {
    res.send({
      diagonal1: diagonal1.toLocaleString(),
      diagonal2: diagonal2.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-area/cuboid", (req, res) => {
  const { length, breadth, height, unit } = req.query;
  const area =
    2 * length * breadth + 2 * length * height + 2 * height * breadth;

  if (!length || !breadth || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      length: length.toLocaleString(),
      breadth: breadth.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-area/cube", (req, res) => {
  const { edge, unit } = req.query;
  const area = 6 * edge * edge;

  if (!edge || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      edge: edge.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-area/cylinder", (req, res) => {
  const { radius, height, unit } = req.query;
  const area =
    ((2 * 22) / 7) * radius * height + ((2 * 22) / 7) * radius * radius;

  if (!radius || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      radius: radius.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-area/cone", (req, res) => {
  const { radius, height, unit } = req.query;
  const length = Math.sqrt(radius * radius + height * height);
  const area = (22 / 7) * radius * length + (22 / 7) * radius * radius;

  if (!radius || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      radius: radius.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-area/sphere", (req, res) => {
  const { radius, unit } = req.query;
  const area = 4 * (22 / 7) * radius * radius;

  if (!radius || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      radius: radius.toLocaleString(),
      unit: unit.toLowerCase(),
      area: `${area.toLocaleString()} ${unit.toLowerCase()}²`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-volume/cuboid", (req, res) => {
  const { length, breadth, height, unit } = req.query;
  const volume = length * breadth * height;

  if (!length || !breadth || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      length: length.toLocaleString(),
      breadth: breadth.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      volume: `${volume.toLocaleString()} ${unit.toLowerCase()}³`,
      status: 200,
    });
  }

  app.get("/3d-shapes-volume/cube", (req, res) => {
    const { edge, unit } = req.query;
    const volume = edge * edge * edge;

    if (!edge || !unit) {
      res.send({
        message: "Missing query",
        status: 400,
      });
    } else {
      res.send({
        edge: edge.toLocaleString(),
        unit: unit.toLowerCase(),
        volume: `${volume.toLocaleString()} ${unit.toLowerCase()}³`,
        status: 200,
      });
    }
  });
});

app.get("/3d-shapes-volume/cylinder", (req, res) => {
  const { radius, height, unit } = req.query;
  const volume = (22 / 7) * radius * radius * height;

  if (!radius || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      radius: radius.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      volume: `${volume.toLocaleString()} ${unit.toLowerCase()}³`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-volume/cone", (req, res) => {
  const { radius, height, unit } = req.query;
  const volume = (22 / 7) * radius * radius * (height / 3);

  if (!radius || !height || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      radius: radius.toLocaleString(),
      height: height.toLocaleString(),
      unit: unit.toLowerCase(),
      volume: `${volume.toLocaleString()} ${unit.toLowerCase()}³`,
      status: 200,
    });
  }
});

app.get("/3d-shapes-volume/sphere", (req, res) => {
  const { radius, unit } = req.query;
  const volume = (4 / 3) * (22 / 7) * radius * radius * radius;

  if (!radius || !unit) {
    res.send({
      message: "Missing query",
      status: 400,
    });
  } else {
    res.send({
      radius: radius.toLocaleString(),
      unit: unit.toLowerCase(),
      volume: `${volume.toLocaleString()} ${unit.toLowerCase()}³`,
      status: 200,
    });
  }
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});
