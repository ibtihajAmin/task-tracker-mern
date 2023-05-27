import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/general/Home";
import Layout from "./components/general/Layout";
import Login from "./components/general/Login";
import Register from "./components/general/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
