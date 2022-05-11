import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import { useEffect } from "react";


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
