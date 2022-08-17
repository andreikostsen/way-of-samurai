import classes from './Post.module.css';

/*type PropsType = {
    message:string
}*/

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img src="http://www.brownhound.co.uk/wp-content/uploads/2016/12/george1-helen-davison.jpg"/>
<div className={classes.item}>{props.message}</div>
</div>
  )
}

export default Post;
