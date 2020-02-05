import React, {useState} from 'react';
import FormikLoginForm from "./components/Form";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Users users={users}/>
      <FormikLoginForm setUsers={setUsers}/>
    </div>
  );
}

export default App;
