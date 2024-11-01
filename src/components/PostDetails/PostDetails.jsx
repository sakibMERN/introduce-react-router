
import PropTypes from 'prop-types'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();
    console.log(postId);

    const {id, title, body} = postDetails;
    console.log(postDetails);

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleBackTOMenu = () => {
      navigate(-1);
    }

  return (
    <div className='border-2 border-green-300 p-5 rounded-2xl'>
        <h3>Post details about: {id}</h3>
        <p>Title: {title}</p>
        <p><small>{body}</small></p>
        {/* <Link to={'/posts'}><button>Go back post</button></Link> */}
        <button onClick={handleGoBack}>Go back</button>
        <button onClick={handleBackTOMenu}>Go back menu</button>
    </div>
  )
}

PostDetails.propTypes = {}

export default PostDetails