import React, { useContext } from "react";
import UserConext from "../context/UserConext";

const Profile =  () => {
  const { user } = useContext(UserConext);

  if (!user) return <div className="text-red-500">Please login</div>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Welcome {user.username}</h2>
      {/* Additional profile information can be added here */}
    </div>
  );
};

export default Profile;
