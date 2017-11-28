import React, {Component} from 'react';
import Post from './Post.jsx';
import PostEditor from './PostEditor.jsx';

class ThreadDisplay extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    this.state = {
      posts: [],
    }
  }

  addPost(newPostBody) {
    let newState = Object.assign({}, this.state);
    newState.posts.push(newPostBody);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        {
          this.state.posts.map((postBody, index) => {
            return (
              <Post key={index} postBody={postBody} postNumber={index}/>
            )
          })
        }
        <PostEditor addPost={this.addPost} />
      </div>
    )
  }
}


export default ThreadDisplay;
