import React, { Component } from 'react';
import { Container, Header, Select, Divider } from 'semantic-ui-react';
import ListCategories from './ListCategories';
import ListPosts from './ListPosts';

class DashboardCategory extends Component {
  render() {
    const orderBy = [
      { key: 'votes', value: 'votes', text: 'voteScore' },
      { key: 'created', value: 'created', text: 'Created' },
    ]
    return(
      <Container>
        <Divider />

        <ListCategories />

        <Divider />

        <Header as='h3'>Order Posts By:</Header>
        <Select placeholder='Select an option' options={orderBy} />

        <Divider />

        <ListPosts />
        
      </Container>
    )
  }
}

export default DashboardCategory;