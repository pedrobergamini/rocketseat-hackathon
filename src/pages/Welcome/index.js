import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Select } from './styles';

export default function Welcome() {
  return (
    <Container>
      <Select>
        <div>
          <Link to="/invest/home">Sou Aluno</Link>
          <Link to="/loans/home">Sou Avaliador</Link>
        </div>
      </Select>
    </Container>
  );
}
