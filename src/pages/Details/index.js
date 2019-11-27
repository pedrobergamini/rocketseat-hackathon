import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

import { Container } from './styles';

export default function Details() {
  return (
    <Container>
      <div className="image-title">
        <img src="https://auditoriacidada.org.br/wp-content/uploads/2018/01/curso-1500x575.jpg" />
      </div>
      <div className="description">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Título do meu curso
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="aulas">
        <Typography variant="h8" color="textSecondary" component="p">
          Total de aulas: 5
        </Typography>
        <div className="cards">
          {/* <div className="card"> */}
          <Card>
            <CardMedia
              style={{
                height: 0,
                paddingTop: '10%', // 16:9
              }}
              image="https://auditoriacidada.org.br/wp-content/uploads/2018/01/curso-1500x575.jpg"
              title="Paella dish"
            />
            texto
          </Card>
          {/* </div> */}
          {/* <div className="card"> */}
          <Card>texto</Card>
          {/* </div> */}
        </div>
      </div>
    </Container>
  );
}
