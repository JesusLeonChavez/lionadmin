//Components
import SideBard from "./components/sidebar/SideBard";
import TopBar from "./components/topbar/TopBar";

import Home from "./pages/home/Home";

//styles
import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBard />
        <Home />
      </div>
    </div>
  );
}

export default App;
