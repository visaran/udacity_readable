import React, { Component } from 'react';
import Post from './Post';
import { List, Item } from 'semantic-ui-react';

class ListPost extends Component{
  render() {
    return(
      <Item.Group relaxed divided>
        <Post />
        <Post />
        <Post />
      </Item.Group>
    )
  }
}

export default ListPost;