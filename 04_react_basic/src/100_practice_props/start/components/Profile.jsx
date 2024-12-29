import "./Profile.css";

const Profile = ({ name = "John Doe", age = "??", from = "Japan" }) => {
  return (
    <>
      <div className="profile">
        <h3>Name:{name}</h3>
        <h3>Age:{age}</h3>
        <h3>From:{from}</h3>
      </div>
    </>
  );
};

export default Profile;
