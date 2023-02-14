import React, { useRef, useState } from 'react'
import { accounts } from '../accounts/accountsDB';
import { useAuth } from '../auth/useAuth';
import { permissions } from '../utils/permissions';
import { users } from '../utils/users';
import Restricted from './Restricted';

const Withdrawl = () => {
    console.log('withdreaw page');
    const accountid = useRef();
    const amount = useRef();
    const [bal,setBal] = useState();


    const {username} = useAuth();
    const loggedUser = users.find((user) => user.name === username)
    const permissionSet = permissions[loggedUser.role];

    const handleBlur = () => {
        const currAccount = accounts.find( (account) => account.id === parseInt(accountid.current.value));
        setBal(currAccount.balance)
    }

    const handleWithdraw = () => {
        const currAccount = accounts.find( (account) => account.id === parseInt(accountid.current.value));
        currAccount.balance -= parseInt(amount.current.value);
        setBal(currAccount.balance);
    }

    const isWithdrawer = permissionSet.includes('withdrawl');
    return isWithdrawer?(
        <>
        <h1>Withdrawl</h1>
        <input type='text' ref={accountid} onBlur={handleBlur} placeholder="Enter id to search"></input>
        <input type='number' ref={amount} placeholder='Enter Amount'></input>
        <button  onClick={handleWithdraw}>submit</button>
        <h2>Current Balance : {bal}</h2>

       </>
       ):<Restricted />
    
}

export default Withdrawl