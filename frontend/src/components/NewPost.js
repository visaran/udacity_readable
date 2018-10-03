import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

class NewPost extends Component {
  render() {
    return(
      <div>
        <Header as='h1'>
          Edit Post
        </Header>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input placeholder='Body' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewPost;