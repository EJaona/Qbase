import React, { useEffect, useState } from 'react';

import CustomInputField from '../utils/CustomInputField'

const Form = ({ customerList, setCustomerList }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [isFormComplete, setIsFormComplete] = useState(false)

    useEffect(() => {

        if(firstName && lastName && email && phone){
            setIsFormComplete(true)
        }else{
            setIsFormComplete(false)
        }

    }, [firstName, lastName, email, phone])

    const addCustomer = (e) => {

        e.preventDefault()

        if(isFormComplete){

            
            if(!customerList.find(customer => customer.email === email)){

                setCustomerList([...customerList, {firstName, lastName, phone, email}])
                setFirstName('')
                setLastName('')
                setEmail('')
                setPhone('')
            }else{
                alert('found a customer with that email address. Please adjust and submit again')
            }

        }
    }


    return(
        <form className='form_container' onSubmit={(e) => addCustomer(e)}>

            <CustomInputField
                className="input_box first_name_input"
                type="text" 
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={setFirstName}
            />
            <CustomInputField
                className="input_box last_name_input"
                type="text" 
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={setLastName}
            />
            <CustomInputField
               className="input_box email_input"
               type="text" 
               name="email"
               placeholder="email"
               value={email}
               onChange={setEmail}
            />
            <CustomInputField
                className="input_box phone_input"
                type="tel" 
                name="phone"
                placeholder="phone"
                value={phone}
                onChange={setPhone}
                max="10"
                min="10"
            />

            <input 
                disabled={!isFormComplete}
                className={`input_box submit_input ${!isFormComplete&&'disabled'}`}
                type="submit" 
                value="Add Customer" 
            />

        </form>
    )
}

export default Form;