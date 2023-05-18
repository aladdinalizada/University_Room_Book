import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Rooms from "./pages/rooms";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </div>
  );
}

export default App;
