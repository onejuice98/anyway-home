import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Game from "./pages/Game/Game";
import Ranking from "./pages/Ranking/Ranking";
import Credits from "./pages/Credits/Credits";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/game" element={<Game/>}/>
              <Route path="/credits" element={<Credits/>}/>
              <Route path="/ranking" element={<Ranking/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// ms