import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    // Display a confirmation dialog
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    if (confirmSignOut) {
      try {
        await logout();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="navbar fixed z-10 bg-primary text-primary-content">
      <div className="contWrap flex justify-between">
        <a className="text-xl font-bold">ChatHub</a>
        {currentUser && (
          <button
            onClick={handleLogout}
            className="text-sm font-bold transition duration-300 ease-in-out hover:text-accent"
          >
            Signout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
