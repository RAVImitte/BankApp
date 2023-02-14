import { useRef, useState } from "react";
import { accounts } from "../accounts/accountsDB";
import { useAuth } from "../auth/useAuth";
import { permissions } from "../utils/permissions";
import { users } from "../utils/users";
import Restricted from "./Restricted";

function Deposit() {
    const accountid = useRef();
    const amount = useRef();

    const {username} = useAuth();
    const loggedUser = users.find((user) => user.name === username)
    const permissionSet = permissions[loggedUser.role];
    const isDepositor = permissionSet.includes('deposit');


    const [bal,setBal] = useState();

    const handleBlur = () => {
        const currAccount = accounts.find( (account) => account.id === parseInt(accountid.current.value));
        console.log(currAccount);
        setBal(currAccount.balance)
    }
    const handleDeposit = () => {
        const currAccount = accounts.find( (account) => account.id === parseInt(accountid.current.value));
        currAccount.balance += parseInt(amount.current.value);
        setBal(currAccount.balance);
    }

    return isDepositor?(
     <>
        <h1>Deposit</h1>
        <input type='text' ref={accountid}  onBlur={handleBlur} placeholder="Enter id to search"></input>
        <input type='number' ref={amount} placeholder='Enter Amount'></input>
        <button  onClick={handleDeposit}>submit</button>
        <h2>Current Balance : {bal}</h2>
    </>
    ):<Restricted />
};
export default Deposit;