import "./App.scss";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div id="main_container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
