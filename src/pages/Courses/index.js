import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import history from '~/services/history';
import { Container } from './styles';

export default function Levels({ match }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesArray = [
      'Introdução a Programação',
      'Introdução a Programação',
      'Introdução a Programação',
      'Introdução a Programação',
      'Introdução a Programação',
      'Introdução a Programação',
      'Introdução a Programação',
    ];

    setCourses(coursesArray);
  }, []);
  return (
    <Container>
      <ul>
        {courses.map(course => (
          <li
            key={course}
            onClick={() =>
              history.push(`/courses/${match.params.level}/${course}`)
            }
          >
            <img
              src="https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png"
              alt="Level"
            />
            <strong>{course}</strong>
          </li>
        ))}
      </ul>
    </Container>
  );
}

Levels.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      level: PropTypes.string,
    }),
  }).isRequired,
};
