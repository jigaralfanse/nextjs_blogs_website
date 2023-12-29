import { Fragment } from "react";
import Hero from "@/component/home_page/hero";
import FeaturedPost from "@/component/home_page/featuredpost";
import {getFeaturedPosts} from '../lib/posts-util'

function Homepage(props) {
   return (
      <Fragment>

         <Hero />
         <FeaturedPost posts={props.posts} />
      </Fragment>
   );
}

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts();

    return {
      props:{
         posts: featuredPosts
      },
      revalidate:600
    }
}

export default Homepage;