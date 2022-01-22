import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const { state } = useLocation();
  const { name } = state;
  return (
    <div>
      <h1>Edit Profile</h1>
      <p>{name}</p>
    </div>
  );
};

export default EditProfile;
