import React, { useState } from 'react';


const Customer = ({ customer, removeCustomer }) => {
   
    const [className, setClassName] = useState('customer_info')
    
    return(
        <div
            className={className}
          >
              <div className="customer_details">
                <p className="customer_details_text">Name: { customer.firstName } { customer.lastName } </p>
                <p className="customer_details_text">Email: { customer.email } </p>
                <p className="customer_details_text">Phone: { customer.phone } </p>
              </div>

            <input 
              className="delete_btn"
              type='submit' 
              value='X' 
              onClick={() => removeCustomer(customer)} 
              onMouseOver={() => setClassName('delete')}
              onMouseOut={() => setClassName('customer_info')}
             
            />
          </div>
    )
}

export default Customer;