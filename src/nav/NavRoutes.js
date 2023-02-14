import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRouter from '../auth/AuthRouter'
import DepositWithdrawPage from '../components/DepositWithdrawPage'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Deposit from '../pages/Deposit'
import ListAccounts from '../pages/ListAccounts'
import Withdrawl from '../pages/Withdrawl'

const NavRoutes = () => {
  return (
        <div>

            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<Logout />} />
                <Route element={<AuthRouter />}>
                    <Route path='deposit' element={<Deposit />} />
                    <Route path='withdrawl' element={<Withdrawl />} />
                    <Route path='depositWithdrawPage' element={<DepositWithdrawPage />} />
                    <Route path='list_accounts' element={<ListAccounts />} />
                </Route>
            </Routes>
        </div>
    )
}

export default NavRoutes