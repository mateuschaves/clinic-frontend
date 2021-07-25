import React from 'react';

import { Container, Greeting, Avatar } from './styles';

const Header: React.FC = () => {
  return <Container>
      <Greeting>
        Olá, <br/>
        Ivonei
      </Greeting>

      <Avatar 
        src="https://i.pravatar.cc/148"
      />
  </Container>
}

export default Header;