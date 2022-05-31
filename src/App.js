//Components
import SideBard from "./components/sidebar/SideBard";
import TopBar from "./components/topbar/TopBar";

//styles
import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBard />
        <div className="others">
          other pages
        </div>
      </div>
    </div>
  );
}

export default App;
