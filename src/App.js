import { Routes } from "react-router-dom";
import app from "./firebase.init";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const auth = getAuth(app)


function App() {
  const provider = new GoogleAuthProvider();


  return (
    <div className="">
      
      <h1 className="container border-4 text-center animate-pulse">React is Working....</h1>

      <Routes>
        
      </Routes>

    </div>
  );
}

export default App;
