
import PropTypes from 'prop-types'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body, userId} = post;
    // console.log(post);
    const post_container ={
        border: '1px solid yellow',
        padding: '5px',
        borderRadius: '20px',
        backgroundColor: 'blue',
        color: 'white'
    }
  return (
    <div style={post_container}  className='flex flex-col'>
        <div className='flex-grow'>
        <h3>Post of id: {id}</h3>
        <p>{title}</p>
        </div>
        <Link to={`/post/${id}`}><button className='btn btn-primary bg-green-400 text-white'>Post Details</button></Link>
    </div>
  )
}

Post.propTypes = {
    post: PropTypes.object
}

export default Post