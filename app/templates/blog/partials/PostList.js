import React from 'react';
import helper from '../../../../data-store/helper.js';
import { Link } from 'react-router-dom';

const PostList = (props) => {
  const posts = props.data.blog_post.data;
  console.log(props);
  return (
    <div>
      {
        posts.map((post, index) => {
          var postPath = `/${props.match.url}/post/${post.attributes.slug}`;
          return (
            <div className="post" key={index}>
              <img src="/assets/img/photo-1.jpg" alt="..." />
              <div className="post-desc">
                <h3 className="post-title">
                  <Link to={postPath}>{post.attributes.title}</Link>
                </h3>
                <hr />
                <p className="text-muted">
                  by <a href="#"
                    className="author-preview"
                    data-toggle="popover"
                    data-placement="right"
                    data-trigger="hover"
                    data-content="Pellentesque nulla leo, laoreet sed luctus eu, dapibus id lorem. Pellentesque eu tincidunt odio."
                    data-original-title="John Doe">
                    John Doe
                  </a> on March 25, 2014
                </p>
                <p>
                  {post.attributes.summary}
                </p>
                <Link className="btn btn-lg btn-red" to={postPath}>Läs mer...</Link>
                { 
                  /*
                  post.relationships.image && (
                    <a href="post_path">
                      <img className="img-responsive post-img" src={helper.getMediaRelationship(post.relationships.image).attributes.file.url} alt={post.heading} />
                    </a>
                  )
                  */
                }
                <br /><br />
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default PostList;