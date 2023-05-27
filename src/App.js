import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/general/Home";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
