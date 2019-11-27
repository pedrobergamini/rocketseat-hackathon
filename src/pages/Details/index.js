import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

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
              Lorem ipsum
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              pellentesque eleifend mauris, ut placerat magna. Vivamus felis
              eros, malesuada id turpis quis, dictum rhoncus orci. In
              vestibulum,
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="aulas">
        <Typography variant="h8" color="textSecondary" component="p">
          Total de aulas: 6
        </Typography>
        <div className="cards">
          <Card>
            <div className="image-title">
              <img src="https://www1.racgp.org.au/getattachment/460451f5-7e0a-47a8-a1d5-e964b705e062/attachment.aspx" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h9" component="h4">
                Aula 1
              </Typography>
              <Typography variant="h15" color="textSecondary" component="p">
                Enviado há 2 dias
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <div className="image-title">
              <img src="https://www1.racgp.org.au/getattachment/460451f5-7e0a-47a8-a1d5-e964b705e062/attachment.aspx" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h9" component="h4">
                Aula 2
              </Typography>
              <Typography variant="h15" color="textSecondary" component="p">
                Enviado há 2 dias
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="cards">
          <Card>
            <div className="image-title">
              <img src="https://www1.racgp.org.au/getattachment/460451f5-7e0a-47a8-a1d5-e964b705e062/attachment.aspx" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h9" component="h4">
                Aula 3
              </Typography>
              <Typography variant="h15" color="textSecondary" component="p">
                Enviado há 2 dias
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <div className="image-title">
              <img src="https://www1.racgp.org.au/getattachment/460451f5-7e0a-47a8-a1d5-e964b705e062/attachment.aspx" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h9" component="h4">
                Aula 4
              </Typography>
              <Typography variant="h15" color="textSecondary" component="p">
                Enviado há 2 dias
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="cards">
          <Card>
            <div className="image-title">
              <img src="https://www1.racgp.org.au/getattachment/460451f5-7e0a-47a8-a1d5-e964b705e062/attachment.aspx" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h9" component="h4">
                Aula 5
              </Typography>
              <Typography variant="h15" color="textSecondary" component="p">
                Enviado há 2 dias
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <div className="image-title">
              <img src="https://www1.racgp.org.au/getattachment/460451f5-7e0a-47a8-a1d5-e964b705e062/attachment.aspx" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h9" component="h4">
                Aula 6
              </Typography>
              <Typography variant="h15" color="textSecondary" component="p">
                Enviado há 2 dias
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
