import React, { useState } from 'react';


const Form = ({ customerList, setCustomerList }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const addCustomer = (e) => {

        e.preventDefault()

        if(firstName, lastName, email, phone){

            
            if(!customerList.find(customer => customer.email === email)){

                setCustomerList([...customerList, {firstName, lastName, phone, email}])
                setFirstName('')
                setLastName('')
                setEmail('')
                setPhone('')
            }else{
                alert('found a customer with that email address')
            }
            

        }else{

            alert('missing one of the fields')
        }

    }


    return(
        <form className='form_container' onSubmit={(e) => addCustomer(e)}>
            <input 
                className="input_box first_name_input"
                type="text" 
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <input 
                className="input_box last_name_input"
                type="text" 
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <input 
                className="input_box email_input"
                type="text" 
                name="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                className="input_box phone_input"
                type="text" 
                name="phone"
                placeholder="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <input 
                className="input_box submit_input"
                type="submit" 
                value="Add Customer" 
            />
        </form>
    )
}

export default Form;