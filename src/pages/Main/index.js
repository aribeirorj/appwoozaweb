import React, { Component } from 'react';
import { Avatar, Container, List, Name, Position } from './styles';
import api from '../../services/api';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await api.get();
      this.setState({ users: response.data });
    } catch (error) {
      // console.log(error);
    }
  }

  render() {
    const { users } = this.state;
    return (
      <Container>
        {users.map((user) => (
          <List key={user.id}>
            <Avatar src={user.avatar} alt="Avatar" />
            <Name data-testid="row"> {user.name}</Name>
            <Position>{user.position}</Position>
          </List>
        ))}
      </Container>
    );
  }
}
