
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    console.log(user);
  return (
    <div>
        <h2>Details about user: {name}</h2>
        <p>Visit Us: <a href="">{website}</a></p>
    </div>
  )
}

UserDetails.propTypes = {}

export default UserDetails