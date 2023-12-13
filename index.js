const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

const getMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", getMovies);

const getMovies2 = (req, res) => {
  res.status(200).json(movies.find((film) => film.title === "The Godfather"));
};

app.get("/api/movies/2", getMovies2);

const getMovies3 = (req, res) => {
  res.status(404).send("Not found");
};
app.get("/api/movies/5", getMovies3);
