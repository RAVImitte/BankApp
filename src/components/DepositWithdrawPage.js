import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavRoutes from '../nav/NavRoutes'

export default function DepositWithdrawPage() {
    const naviagate = useNavigate()
    const handleDeposit = () => {
        naviagate("/deposit")
    }
    const handleWithdraw = () => {
        naviagate("/withdrawl")
    }
  return (
    <div>
    
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdrawl</button>
    </div>
  )
}
