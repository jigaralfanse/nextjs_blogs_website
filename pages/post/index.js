import AllPost from '../../component/posts/all-post'
import {getAllPosts} from '../../lib/posts-util'

function Allpostpage(props){
     return (
        <section>
            
           <AllPost posts = {props.posts}/>
        </section>
     );
}

export function getStaticProps(){
   const allPosts = getAllPosts();

   return {
      props:{
         posts: allPosts
      }
   };
}

export default Allpostpage;