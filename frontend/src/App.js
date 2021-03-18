import React, {useState, useEffect} from 'react'

const App = () => {

  const [customerList, setCustomerList] = useState([])

  useEffect(() => {
    setCustomerList([
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
        email:'S.Uchiha@UchihaClan.gov'
      },
      {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '6515678900',
        email:'Clark.Kent@dailyPlanet.com'
      }
    ])
  }, [])

  return (
    <div className="App">
      {
        customerList.map( customer => (
          <div
          style={{
            border: '2px solid black'
          }}
          >
            <p>Name: { customer.firstName } { customer.lastName } </p>
            <p>Email: { customer.email } </p>
            <p>Phone: { customer.phone } </p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
