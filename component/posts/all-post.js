import React from 'react'
import PostGrid from './post-grid';
import classes from './all-post.module.css'
function All_Post(props) {
  return (
    <section className={classes.posts}>
        <PostGrid posts = {props.posts}/>
    </section>
  );
}

export default All_Post;