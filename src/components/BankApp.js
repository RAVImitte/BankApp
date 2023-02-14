import React from 'react'
import NavLinks from '../nav/NavLinks'
import NavRoutes from '../nav/NavRoutes'
import "../BankApp.css";
import { AuthProvider } from '../auth/useAuth';


const BankApp = () => {
  return (
    <AuthProvider>
        <NavLinks />
        <NavRoutes />
    </AuthProvider>
    )
}

export default BankApp