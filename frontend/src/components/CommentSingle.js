import React, { Component } from 'react';
import { Form, Comment, Button } from 'semantic-ui-react';

class CommentSingle extends Component {
  render() {
    return(
      <Comment.Group>
        <Comment>
          
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
  }
}

export default CommentSingle;