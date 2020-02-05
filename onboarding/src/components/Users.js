import React from "react";
import User from "./User";

function Users({users}) {
  return (
    <div>
      {users.map((user, i) => <User key={i} {...user} />)}
    </div>
  );
}

export default Users;