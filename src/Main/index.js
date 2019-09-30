import React, { Component } from 'react';
import { Avatar, Container, List, Name, Position } from './styles';
import api from '../services/api';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  async componentDidMount() {
    try {
      const response = await api.get();
      this.setState({ users: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { users } = this.state;
    return (
      <Container>
        <ul>
          {users.map((user) => (
            <List key={user.id}>
              <Avatar src={user.avatar} alt="sss" />
              <Name>{user.name}</Name>
              <Position>{user.position}</Position>
            </List>
          ))}
        </ul>
      </Container>
    );
  }
}