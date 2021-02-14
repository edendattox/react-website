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
    // backgroundColor: "#90caf9",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        font-family="Fraunces, serif"
        container
        spacing={8}
        justify="center"
        alignContent="center"
      >
        <Grid item sm={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
                image="https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?"
              />
              <CardContent style={{ backgroundColor: "#ff6666" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                  alignItems="center"
                >
                  MULTIMEDIA
                </Typography>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  variant="body2"
                  component="p"
                >
                  Simply interweave text with audio, images, videos & data into
                  compelling web reports. Pageflow provides 13 modules and a
                  bunch of features to create and publish interactive multimedia
                  stories and audio.
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
                title="Contemplative Reptile"
                image="https://images.pexels.com/photos/3277806/pexels-photo-3277806.jpeg??"
              />
              <CardContent style={{ backgroundColor: "#ffd845" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  RESPONSIVE
                </Typography>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Eden quickly adapts to any screen size and device. All
                  features enhance a mobile-friendly performance and therefore
                  provide a fluent and congruent user experience across all
                  modern platforms.
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
                image="https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg?"
                title="Contemplative Reptile"
              />
              <CardContent style={{ backgroundColor: "#7177f3" }}>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  TEAMWORK
                </Typography>
                <Typography
                  style={{ color: "#3a3a3a", fontFamily: "Fraunces, serif" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  An integrated user management allows editorial teams to easily
                  work together. Different roles and rights can be assigned for
                  admins and editors to enable a simple management of multi-user
                  accounts.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
