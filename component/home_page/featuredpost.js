import classes from './featuredpost.module.css'
import PostGrid from '../posts/post-grid'
function  FeaturedPosts(props){
    return (
        <section className={classes.latest}>
            
            <PostGrid posts = {props.posts}/>
        </section>
    );
}

export default FeaturedPosts;