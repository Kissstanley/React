import './App.css';
import CarContainer from "./components/CarContainer/CarContainer";
import {UserContainer} from "./components/UserContainer/UserContainer";
import {PostContainer} from "./components/PostContainer/PostContainer";
function App() {
  return (
      <div>
       {/*<CarContainer/>*/}
        <UserContainer/>
        <PostContainer/>
      </div>
  )
}

export default App;
