//Components
import SideBard from "./components/sidebar/SideBard";
import TopBar from "./components/topbar/TopBar";

//Pages
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

//styles
import "./app.css";

//Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBard />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
