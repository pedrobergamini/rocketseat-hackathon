import React, { useEffect, useState } from 'react';

import history from '~/services/history';
import { Container } from './styles';

export default function Levels() {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const levelsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    setLevels(levelsArray);
  }, []);
  return (
    <Container>
      <ul>
        {levels.map(level => (
          <li key={level} onClick={() => history.push(`/courses/${level}`)}>
            <strong>Nível {level}</strong>
          </li>
        ))}
      </ul>
    </Container>
  );
}
