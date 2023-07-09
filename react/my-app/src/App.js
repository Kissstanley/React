import './App.css';
import {PostComponent} from "./components/PostCompoment/PostComponent";
import {FlightComponent} from "./components/FlightComponent/FlightComponent";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Users/Posts/Posts";
import {useState} from "react";
const App=()=> {
  const[userId,setUserId]=useState(null)
  return (
    <>
        {/*<PostComponent/>*/}
        {/*<FlightComponent/>*/}
        {<Users setUserId={setUserId}/>}
        {userId&&<Posts userId={userId}/>}
    </>
  );
}

export default App;
