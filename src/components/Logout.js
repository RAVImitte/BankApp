import React from 'react'
import { useAuth } from '../auth/useAuth';

const Logout = () => {
    const {logout} = useAuth();

    const handleLogout = () =>{
        console.log('loggedout');
        logout();
    }

  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout