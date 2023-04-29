import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import { sleep } from "radash";

import XayahPic from "./assets/XayahEdit.png";

import { Header } from "./components";

const makeStyles = () => ({
  container: {
    flexGrow: 1,
  },
  item: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  image: {
    objectFit: "contain" as const,
    height: "auto",
    width: "100%",
  },
});

const highlights = [
  "very passionate about front-end universe 👨🏼‍💻",
  "a proud pet owner 🐶",
  "a creative coder 👨🏼‍💻",
  "an horror movies fan 😱",
  "a nintendo gamer 🍄",
];

function App() {
  const classes = makeStyles();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(async () => {
      setLoading(true);
      await sleep(100);
      setIndex((prevIndex) =>
        prevIndex + 1 !== highlights.length ? prevIndex + 1 : 0
      );
      setLoading(false);
    }, 3_000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Header />
      <Grid container spacing={2} style={classes.container}>
        <Grid item xs={12} md={8} style={classes.item}>
          <h3>Hello there!</h3>
          <h2 style={{ margin: 0 }}>I'm André S. de Almada</h2>
          <h1 style={{ margin: 0 }}>senior full-stack engineer</h1>
          <h3>
            and also
            <Fade in={!loading}>
              <span>&nbsp;{highlights[index]}</span>
            </Fade>
          </h3>
        </Grid>
        <Grid item xs={12} md={4} style={classes.item}>
          <img style={classes.image} src={XayahPic} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
