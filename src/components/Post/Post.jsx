
import PropTypes from 'prop-types'

const Post = ({post}) => {
    const {id, title, body, userId} = post;
    console.log(post);
    const post_container ={
        border: '1px solid yellow',
        padding: '5px',
        borderRadius: '20px',
        backgroundColor: 'blue',
        color: 'white'
    }
  return (
    <div style={post_container}>
        <h3>Post of id: {id}</h3>
        <p>{title}</p>
    </div>
  )
}

Post.propTypes = {}

export default Post