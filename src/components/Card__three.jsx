import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    // width: "20vw",
    paddingTop: "100px",
    flexGrow: "1",
    textAlign: "center",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={8} justify="center" alignContent="center">
        <Grid item sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#7177f3" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                  alignItems="center"
                >
                  OPEN SOURCE
                </Typography>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  The source code of Pageflow is available under an MIT license
                  via GitHub. Anyone can view, download and contribute to it.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#ffd845" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  HOSTED-PAGEFLOW
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start immediately without setting up your own server? Try our
                  hosted Pageflow service and sign up now for a free trial
                  account.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
