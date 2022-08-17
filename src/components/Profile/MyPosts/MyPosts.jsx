import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
      <article>
    <Post message="HI"/>
  <Post message="How are you?"/>
  <Post message="Thanks"/>
      </article>
  )
}

export default MyPosts;
