import React, { useState } from 'react';


const Customer = ({ customer, removeCustomer }) => {
   
    const [className, setClassName] = useState('customer_info')
    
    return(
        <div
            style={{
              border: '2px solid black',
            }}
            className={className}
          >
              <div className="customer_details">
                <p>Name: { customer.firstName } { customer.lastName } </p>
                <p>Email: { customer.email } </p>
                <p>Phone: { customer.phone } </p>
              </div>

            <input 
              type='submit' 
              value='Delete' 
              onClick={() => removeCustomer(customer)} 
              onMouseOver={() => setClassName('delete')}
              onMouseOut={() => setClassName('customer_info')}
            />
          </div>
    )
}

export default Customer;