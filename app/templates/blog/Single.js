import React from 'react';

const Single = ({ data, location }) => (
  <div className="post">
    <img src="/assets/img/photo-1.jpg" alt="..." />
    <div className="post-desc">
      <h3 className="post-title">
        post.title
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
      <img className="img-responsive post-img" src="image.attributes.file.url" alt="..." />
      post.body
    </div>
  </div>
);

export default Single;