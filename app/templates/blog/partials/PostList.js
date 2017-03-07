import React from 'react';

const PostList = (props) => {
  return (
    <div className="post">
      <img src="/assets/img/photo-1.jpg" alt="..." />
      <div className="post-desc">
        <h3 className="post-title">
          <a href="post_path">post.title</a>
        </h3>
        <hr />
        <p className="text-muted">
          by
          <a href="#"
            className="author-preview"
            data-toggle="popover"
            data-placement="right"
            data-trigger="hover"
            data-content="Pellentesque nulla leo, laoreet sed luctus eu, dapibus id lorem. Pellentesque eu tincidunt odio."
            data-original-title="John Doe">John Doe
          </a>
          on March 25, 2014
        </p>
        <p>
          post.summary
        </p>
        <a className="btn btn-lg btn-red" href="post_path">Läs mer...</a>
        <a href="post_path"><img className="img-responsive post-img" src="/assets/img/general-3.jpg" alt="..." /></a>
        <br /><br />
      </div>
    </div>
  );
};

export default PostList;