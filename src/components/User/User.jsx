import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, id, email, phone} = user;

    //Add style
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px', 
        borderRadius: '20px', 
    }
  return (
    <div style={userStyle}> 
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <Link to={`/user/${id}`}>Show Details</Link>
        <br />
        <Link to={`/user/${id}`}><AwesomeButton type="primary">See Details</AwesomeButton></Link>
    </div>
  )
}

User.propTypes = {
    user: PropTypes.object
}

export default User