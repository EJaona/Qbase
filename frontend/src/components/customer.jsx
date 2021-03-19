import React, { useState } from 'react';


const Customer = ({ customer, removeCustomer }) => {
   
    const [className, setClassName] = useState('customer_info')
    
    return(
        <div
            style={{
              border: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              boxShadow: '0 0 4px',
              borderRadius: '15px'
            }}
            className={className}
          >
              <div className="customer_details">
                <p className="customer_details_text">Name: { customer.firstName } { customer.lastName } </p>
                <p className="customer_details_text">Email: { customer.email } </p>
                <p className="customer_details_text">Phone: { customer.phone } </p>
              </div>

            <input 
              type='submit' 
              value='Delete' 
              onClick={() => removeCustomer(customer)} 
              onMouseOver={() => setClassName('delete')}
              onMouseOut={() => setClassName('customer_info')}
              style={{
                  background: 'white',
                  color: 'red',
                  borderRadius: '5px',
                  borderColor: 'red'
              }}
            />
          </div>
    )
}

export default Customer;