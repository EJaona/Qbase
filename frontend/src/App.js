import React, {useState, useEffect} from 'react'
import Form from './components/Form';
import Customer from './components/customer'
import './App.css' 

const App = () => {

  let [customerList, setCustomerList] = useState([
    {
      firstName: 'Bob',
      lastName: 'Belcher',
      phone: '6511234567',
      email:'BobbyB@BobsBurgers.com'
    },
    {
      firstName: 'Sasuke',
      lastName: 'Uchiha',
      phone: '6513456789',
      email:'Uchiha.S@UchihaClan.gov'
    },
    {
      firstName: 'Clark',
      lastName: 'Kent',
      phone: '6515678900',
      email:'Clark.Kent@dailyPlanet.com'
    }
  ])

  
  const removeCustomer = (removedCustomer) => {

    setCustomerList(
      customerList.filter(customer => customer !== removedCustomer)
    )
  }

 

  return (
    <div className="App">

        <Form
          customerList={customerList}
          setCustomerList={setCustomerList}
        />

      <div className="customer_list">
        
        {
          customerList.map( customer => (
            <Customer key={customer.email} customer={customer} removeCustomer={removeCustomer}/>
          ))
        }
      </div>

    </div>
  );
}

export default App;
