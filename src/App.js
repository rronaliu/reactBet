import "./App.css";
import Navbar from "./components/navbar/navbar";
import Stories from "./components/stories/stories";
import League from "./components/league/league";
import Fulltime from "./components/fulltime/fulltime";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stories />
      <Fulltime />
      <League />
    </div>
  );
}

export default App;
