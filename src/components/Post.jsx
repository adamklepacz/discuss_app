import React from 'react';

const Post = (props) => {
  return (
    <div className="panel panel-default post-body">
      <div className="panel-heading">
        <h6>Post number: { props.postNumber + 1} </h6>
        <span>Posted on: </span>
      </div>
      <div className="panel-body">
        {
          props.postBody.map((postPart, index) => {
            return <div key={index}>{postPart}</div>
          })
        }
      </div>
    </div>
  )
}

export default Post;
