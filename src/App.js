import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Routes/Login/Login";
import Homepage from "./Routes/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
