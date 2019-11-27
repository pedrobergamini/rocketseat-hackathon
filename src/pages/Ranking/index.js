import React, { useEffect, useState } from 'react';

import { Container } from './styles';

export default function Ranking() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        name: 'João da Silva',
        points: 999,
        email: 'joao@helloworld.com',
      },
      {
        name: 'João da Silva',
        points: 999,
        email: 'joao@helloworld.com',
      },
      {
        name: 'João da Silva',
        points: 999,
        email: 'joao@helloworld.com',
      },
      {
        name: 'João da Silva',
        points: 999,
        email: 'joao@helloworld.com',
      },
      {
        name: 'João da Silva',
        points: 999,
        email: 'joao@helloworld.com',
      },
      {
        name: 'João da Silva',
        points: 999,
        email: 'joao@helloworld.com',
      },
    ]);
  }, []);

  return (
    <Container>
      <strong>RANKING</strong>
      <ul>
        {users.map(user => (
          <li>
            <main>
              <img
                src="https://cdn.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg"
                alt="Profile"
              />
              <div>
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>
            </main>

            <aside>
              <strong>{user.points}</strong>
            </aside>
          </li>
        ))}
      </ul>
    </Container>
  );
}
