import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { users } from '../utils/users';
import { useAuth } from './useAuth';


const AuthRouter = () => {
  console.log('AUTHROUT')
  const {username} = useAuth();
  const loggedUser = users.find((user) => user.name === username)
  console.log('auth-router   logged user ' , loggedUser);
  return loggedUser?<Outlet />:<Navigate to='login'></Navigate>
}

export default AuthRouter;