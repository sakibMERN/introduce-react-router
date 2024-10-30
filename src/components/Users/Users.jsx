import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <h2>This is our users : {users.length}</h2>
      <p>This is our most valuable users. I have get some now users.</p>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Users;
