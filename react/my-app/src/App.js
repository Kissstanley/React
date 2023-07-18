import './App.css';
import {useEffect, useState} from "react";
import {Users} from "./components/UsersContainer/Users";

const App=()=> {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users=>users.json())
            .then(users=>setUsers(users)
            )},[])

    return (
    <>
      <Users
      users={users}
      />
    </>
  );
}

export default App;
