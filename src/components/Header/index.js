import React from 'react';

import { Container, Logo, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>
        <strong>Code4All</strong>
      </Logo>
      <Profile src="https://cdn.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
    </Container>
  );
}
