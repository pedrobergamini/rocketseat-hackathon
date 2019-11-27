import React, { useState } from 'react';

import { Container, Description, Title } from './styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DetalhesCurso() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <Container>
      <header>
        {
          <div className="image-title">
            <img src="https://auditoriacidada.org.br/wp-content/uploads/2018/01/curso-1500x575.jpg" />
          </div>
          /* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JrVS7YsGw8w?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */
        }
      </header>
      <content>
        <div className="description">
          <Title>Título do curso</Title>
          <Description className={seeMore ? 'hide' : 'show'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dignissim dui dui, a elementum orci hendrerit in. Integer ac lectus
            vel nisi porta accumsan. Ut sit amet malesuada augue, id aliquam
            dui. Duis dignissim lorem ut eros egestas porttitor. Sed eu eleifend
            libero. Nulla et mauris vitae urna ullamcorper fermentum. Aliquam
            consectetur bibendum diam quis euismod. Praesent congue, neque et
            egestas pulvinar, mauris nunc viverra turpis, nec imperdiet metus
            purus ac arcu. Praesent lobortis velit non orci dapibus ultrices.
            Sed eget luctus enim. Aliquam non lacus nisl. Maecenas pellentesque
            laoreet sagittis. Fusce tincidunt fermentum tempus.
          </Description>
        </div>
        <div className="activities">
          <ul className="activities-list">
            <li>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </li>
            <li>
              <div className="activity-element">
                <div className="activity-link">
                  {/* <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                </div>
                <div className="activity-title">
                  <h3>1 - Título da atividade</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </content>
      <footer></footer>
    </Container>
  );
}
