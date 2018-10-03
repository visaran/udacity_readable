import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';
import { Container } from 'semantic-ui-react';
import NewPost from './NewPost';

class App extends Component {
  render() {
    return (
      <Container className="container">
        <Dashboard />
      </Container>
    );
  }
}

export default App;
