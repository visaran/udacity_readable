import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';

class ListCategories extends Component {
  render() {
    return(
      <div>
        <Header as='h2'>Categories</Header>
        <ul>
          <li><a href="#">React</a></li>
          <li><a href="#">Redux</a></li>
          <li><a href="#">Udacity</a></li>
        </ul>
      </div>
    )
  }
}

export default ListCategories;