import { Route, Routes } from "react-router-dom";
import app from "./firebase.init";
import { getAuth } from 'firebase/auth'


export const auth = getAuth(app);



function App() {


  return (
    <div className="">
      
      <h1 className="container border-4 text-center animate-pulse">React is Working....</h1>

      <Routes>
        <Route path="/" element={''}/>
      </Routes>

    </div>
  );
}

export default App;
