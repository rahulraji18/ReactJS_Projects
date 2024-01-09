import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
  const {user} = useContext(UserContext);
  if(!user) return <div>Not Logged In</div>
  return (
    <div>
      {console.log(user)}
      User: {user.username}
    </div>
  )
}

export default Profile
