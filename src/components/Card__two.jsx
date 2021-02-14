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
        <Grid item sm={4} xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#bee5d3" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                  alignItems="center"
                >
                  MODULAR
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The modular structure of Pageflow allows a continuous adding
                  of new types of pages and features.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#ff7b54" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  MEDIA-MANAGEMENT
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Upload pictures, videos and audio files directly with ease.
                  Files are automatically encoded into the correct formats. More
                  about encoding?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/4112283/pexels-photo-4112283.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#fde8cd" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  WYSIWYG-EDITOR
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Pageflow-editor provides a live preview (WYSIWYG) and is
                  easy to handle, even for users with little technical know-how.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#e7e7de" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  USER-MANAGEMENT
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Every client has an integrated user administration and can
                  choose the front-end theme.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#ffd845" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  ACCESSIBLE
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The no-frills design and the use of HTML5 instead of Flash,
                  makes it possible to view the reports on almost all modern
                  devices.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#7177f3" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  ADVANTAGES
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The main aim of Pageflow is to merge various multimedia
                  elements. In combination with its full screen format, it gives
                  you a great storytelling experience.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
