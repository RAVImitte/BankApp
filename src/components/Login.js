import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { users } from "../utils/users";
//import { accounts } from "../accounts/accountsDB";

const Login = () => {
  const { login } = useAuth();
  const naviagate = useNavigate();
  const [username,setUsername] = useState();
  const handleLogin = () => {
    login(username);
    const loggedUser = users.find((user) => user.name === username)
    if(loggedUser.role === "depositor") {
      naviagate("/deposit")
    } 
    else if(loggedUser.role === "accountant") {
      naviagate("/depositWithdrawPage")
    }
    else if(loggedUser.role === "withdrawer") {
      naviagate("/withdrawl")
    }
  };

  const handleSelect = (event) =>{
    setUsername(event.target.value);
    // console.log(event.target.value);
  }
  return (
    <div>
      <select onChange={handleSelect} >
        <option value="none" defaultValue  hidden>Select an Option</option>
        {users.map((user) => (
          <option  key={user.role} value={user.name}>
            {user.name} {user.role}
          </option>
        ))}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
