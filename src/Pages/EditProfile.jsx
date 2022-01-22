import { useContext } from "react";
import UserProfile from "../Store/user.jsx";

const EditProfile = () => {
  const user = useContext(UserProfile);
  console.log(user.name);

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>{user.name}</p>
    </div>
  );
};

export default EditProfile;
