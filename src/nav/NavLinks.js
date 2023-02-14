import React from 'react'
import { Link } from 'react-router-dom';
const NavLinks = () => {
  return (
    <nav>
        <Link to='login' >Login</Link>
        <Link to='logout' >Logout</Link>
        <Link to='deposit' >Deposit</Link>
        <Link to='withdrawl' >Withdraw</Link>
        <Link to='list_accounts' >List of accounts</Link>
    </nav>
  )
}

export default NavLinks;