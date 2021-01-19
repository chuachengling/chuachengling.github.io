import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/fake_news.jpg";
import project2 from "../images/dsa3101.png";
import project3 from "../images/cs2102_pcs.jpg";
import project4 from "../images/readbook.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#141424",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Fake News Detection with Deep Learning Models
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this project, under NUS CS3244 - Machine Learning, my teammates and I worked on 
                  creating a fake news detection model using different deep learning teachniques such
                  as CNNs, RNNs and BERT models. You can find out more at the github repository below!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Data Science in Practice
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this project, under NUS DSA3101 - Data Science in Practice, my teammates and I worked on 
                  multiple Data Science techniques such as RFM Modelling, Market Basket Analysis, Prediction and 
                  Forecasting to help our client make sound and accurate business decisions with Data Science.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Pet Care Service Application
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this project my team and I created a pet care service application 
                  that allows owners and part time workers to connect for their pet care services.
                  This was done under NUS CS2102 - Database Systems.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  ReadBook
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this project, my teammate and I created a locator service for study spaces
                  on campus. This would hopefully enable students to find study spaces more easily 
                  and also allow them to see reviews of different locations. 

                  This project was awarded the Apollo "Advanced" Category under CP2106, and Independent
                  Software Engineering Project under the School of Computing.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
