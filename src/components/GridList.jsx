import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import dataList from "../content/data";
import "../css/girdList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    top: "-300",
    backgroundColor: theme.palette.background.paper,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="root-grid">
      <div class="mask"></div>
      <GridList cellHeight={430} cols={3} style={{ height: 870, width: 1280 }}>
        {dataList.map((data) => (
          <GridListTile key={data.id} cols={data.cols || 1}>
            <img src={data.src} alt={data.title} />

            <span className="tooltiptext">{data.title}</span>
            <p>{data.description}</p>
            <a href="#" class="info">
              Read More
            </a>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
