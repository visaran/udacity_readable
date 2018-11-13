import React, { Component } from 'react';
import { Grid, Header, Select, Divider, Button } from 'semantic-ui-react';
import ListCategories from './ListCategories';
import ListPosts from './ListPosts';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
  

  render() {
    const orderBy = [
      { key: 'votes', value: 'votes', text: 'voteScore' },
      { key: 'created', value: 'created', text: 'Created' },
    ];

    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Link to="/newpost" replace={true}>
              <Button color='green' content='Add new post' icon='add'/>
            </Link>  
            
            <Header as='h1'>
              All Posts
            </Header>

            <Header as='h3'>Order Posts By:</Header>
            <Select placeholder='Select an option' options={orderBy} />
            <Divider />

            <ListPosts />
          </Grid.Column>

          <Grid.Column width={6}>
            <ListCategories />
          </Grid.Column>

        </Grid.Row>
      </Grid>
    )
  }
}

export default Dashboard;