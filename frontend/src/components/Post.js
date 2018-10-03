import React, { Component } from 'react';
import { List, Item, Button } from 'semantic-ui-react';

class Post extends Component{
  render() {
    return(
      <Item>
        <Item.Content>
          <Item.Header as='a'>Título do post</Item.Header>
          <Item.Meta>Category: redux</Item.Meta>
          <Item.Description>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic inventore cumque exercitationem in debitis saepe praesentium a sit et aspernatur, sint quidem nihil dolores reprehenderit voluptates quos blanditiis maiores!</p>
          </Item.Description>
          <Item.Extra>22/10/2018</Item.Extra>
          <Item.Extra>By: Author</Item.Extra>
          <Item.Meta><List.Icon name='thumbs up' />2</Item.Meta>
          <div className="post-btns">
            <Button color='yellow' icon='edit'/>
            <Button color='red' icon='remove'/>
          </div>
          
        </Item.Content>
      </Item>
    )
  }
}

export default Post;