import Link from "next/link";
import classes from './post-item.module.css'
import Image from "next/image";


function PostItem(props) {
    const { title,image ,excerpt,date,slug} = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day:"numeric",
        month:"long",
        year:"numeric"
    });
 const ImagePath  = `/images/posts/${image}`;
 const LinkPath = `/post/${slug}`;
    return (
        <li className={classes.post}>
            <Link href={LinkPath}>
                <div className={classes.image}> 
                    <Image src={ImagePath} alt={title} width={300} height={200} layout="responsive"/>
                </div>
                <div className={classes.content}>
                     <h3>{title}</h3>
                     <time>{formattedDate}</time>
                     <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    );
}

export default PostItem;