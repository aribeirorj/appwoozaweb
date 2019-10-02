import React from 'react';
import { Container, Content } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header1() {
  return (
    <Container>
      <Content>
        <nav>
          {' '}
          <img src={logo} alt="logo" />
        </nav>
      </Content>
    </Container>
  );
}
