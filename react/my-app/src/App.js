import './App.css';
import {createContext, useEffect, useState} from "react";
import {Users} from "./components/UsersContainer/Users";
import {UsersComponent} from "./components/UsersComponent/UsersComponent";
import {Posts} from "./components/Posts/Posts";
import {Child1} from "./components/Child1/Child1";
import {Child2} from "./components/Child2/Child2";

// const App=()=> {
//     const [userId,setUserId]=useState(null)
//     // const [users,setUsers]=useState([])
//     // useEffect(()=>{
//     //     fetch('https://jsonplaceholder.typicode.com/users')
//     //         .then(users=>users.json())
//     //         .then(users=>setUsers(users)
//     //         )},[])
//
//     return (
//     <>
//       {/*<Users*/}
//       {/*users={users}*/}
//       {/*/>*/}
//         <UsersComponent setUserId={setUserId}/>
//         {userId && <Posts userId={userId}/>}
//     </>
//   );
// }
//
export const ThemeContext=createContext(null)
const App =()=>{
    const [data,setData]=useState(['----'])
    return(
    <ThemeContext.Provider value={{data,setData}}>
        <div>
            <Child1/>
            <Child2/>
        </div>
    </ThemeContext.Provider>
    )
}

export default App;
