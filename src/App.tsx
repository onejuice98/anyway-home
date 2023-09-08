import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Roadview from "./pages/Roadview/Roadview";
import Credits from "./pages/Credits/Credits";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/roadview" element={<Roadview/>}/>
              <Route path="/credits" element={<Credits/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// ms