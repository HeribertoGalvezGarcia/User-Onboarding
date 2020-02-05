import React from "react";

function User({username, email, password, tos}) {
  return (
    <div>
      <h3>Username: {username}</h3>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Checked ToS: {tos.toString()}</p>
    </div>
  );
}

export default User;