import React from 'react'
import { accounts } from '../accounts/accountsDB'

const ListAccounts = () => {
    const all_accounts = accounts;
  return (
    <table border="01" cellpadding="15">
        <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>BALANCE</th>
        </thead>
        <tbody>
            {all_accounts.map( (account) => 
            <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.name}</td>
                <td>{account.balance}</td>
            </tr> )}
        </tbody>
    </table>
  )
}

export default ListAccounts;