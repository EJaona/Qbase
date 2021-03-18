import React, { useState } from 'react';


const Form = ({ customerList, setCustomerList }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const addCustomer = (e) => {

        e.preventDefault()
        setCustomerList([...customerList, {firstName, lastName, phone, email}])
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
    }

    return(
        <form onSubmit={(e) => addCustomer(e)}>
            <input 
                type="text" 
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <input 
                type="text" 
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <input 
                type="text" 
                name="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type="text" 
                name="phone"
                placeholder="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <input 
                type="submit" 
                value="Add Customer" 
            />
        </form>
    )
}

export default Form;