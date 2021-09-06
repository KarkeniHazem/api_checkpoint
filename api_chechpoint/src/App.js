
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList';


function App() {

  const [users, setusers] = useState([])
  const [error, seterror] = useState()


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {

      setusers(response.data);
    })

    .catch( function (error){
      seterror (error)
    })
  

  },
  [])
  return (
    <div className="App">
      <UserList users={users} /> 
    </div>
  );
}

export default App;
