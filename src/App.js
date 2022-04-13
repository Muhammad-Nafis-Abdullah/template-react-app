import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";


function App() {


  return (
    <div className="">
      
      <h1 className="container border-4 text-center animate-pulse">React is Working....</h1>

      <Routes>
        <Route path="/" element={''}/>

        

        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
