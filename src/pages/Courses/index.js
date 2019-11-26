import React, { useEffect, useState } from 'react';

import history from '~/services/history';
import { Container } from './styles';

export default function Levels() {
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
          <li key={course} onClick={() => history.push(`/courses/${course}`)}>
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
