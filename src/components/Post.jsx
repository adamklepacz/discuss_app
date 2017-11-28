import React from 'react';

const Post = (props) => {
  return (
    <div className="panel panel-default post-body">
      <div className="panel-heading">
        <h6>Post numer: { props.postNumber } </h6>
        <span>Posted on: </span>
      </div>
      <div className="panel-body">
        { props.postBody }
      </div>
    </div>
  )
}

export default Post;
