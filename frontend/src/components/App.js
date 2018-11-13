import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Dashboard from './Dashboard';
import { Container } from 'semantic-ui-react';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

class App extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    axios.get('http://localhost:3002/categories', { headers })
      .then(response => {
        const categories = response.data;
        this.setState({categories});
        console.log(response);
      })
  }
  

  render() {
    return (
      <Container className="container">
        {console.log(this.state.categories.categories)}
        {/* {this.state.categories.categories.map(category => (
          <div>teste</div>
        ))} */}
      </Container>
    );
  }
}


export default App;
