// Profile.jsx

import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      {user ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Welcome, {user.username}!
          </h2>
          {/* Additional profile information here */}
        </div>
      ) : (
        <div className="text-red-500">Please Login</div>
      )}
    </div>
  );
};

export default Profile;
