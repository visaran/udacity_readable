import React, { Component } from 'react';
import CommentSingle from './CommentSingle';
import Post from './Post';
import { Item, Form, Header, Button } from 'semantic-ui-react';

class PostDetails extends Component {
  render() {
    return(
      <div>
        <Header as='h1' dividing>
          Post
        </Header>
        <Item.Group relaxed divided>
          <Post />

          <Header as='h3' dividing>
            Comments
          </Header>
          <CommentSingle />
          <CommentSingle />
          <CommentSingle />

          <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Item.Group>
      </div>
    )
  }
}

export default PostDetails;