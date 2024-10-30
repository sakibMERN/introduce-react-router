
import PropTypes from 'prop-types'

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
    </div>
  )
}

User.propTypes = {
    user: PropTypes.object
}

export default User