import React from 'react';

import {
  Card,
  CardContent,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextareaAutosize,
  Button,
} from '@material-ui/core';

import history from '~/services/history';
import { Container } from './styles';

export default function Activity() {
  function handleFinish() {
    history.push('/');
  }
  return (
    <Container>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UauiAPQb3fs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
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
              vestibulum,Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur pellentesque eleifend mauris, ut placerat magna.
              Vivamus felis eros, malesuada id turpis quis, dictum rhoncus orci.
              In vestibulum,Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur pellentesque eleifend mauris, ut placerat magna.
              Vivamus felis eros, malesuada id turpis quis, dictum rhoncus orci.
              In vestibulum,
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="excercises">
        <div className="exercise">
          <Card>
            <CardContent>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Curabitur pellentesque eleifend mauris, ut placerat magna.
                  Vivamus felis eros, malesuada id turpis quis?
                </FormLabel>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Gilad Gray" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Antoine Llorca"
                  />
                </FormGroup>
              </FormControl>
            </CardContent>
          </Card>
        </div>
        <div className="exercise">
          <Card>
            <CardContent>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </FormLabel>
                <br />
                <TextareaAutosize
                  style={{
                    width: '90%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingBottom: 0,
                    marginTop: 0,
                    fontWeight: 500,
                    backgroundColor: '#333',
                    fontColor: '#FFF',
                  }}
                  aria-label="minimum height"
                  rows={10}
                  placeholder="Minimum 3 rows"
                />
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="footer">
        <Button variant="contained" color="secondary" onClick={handleFinish}>
          Finalizar
        </Button>
      </div>
    </Container>
  );
}
