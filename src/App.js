import "./App.scss";
// import Main from "./components/main";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import MyShelf from "./pages/myShelf";
import AddBook from "./pages/addBook";

function App() {
  return (
    <BrowserRouter>
      <div id="main_container">
        <Sidebar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/search" element = {<Search/>}/>
          <Route path="/myShelf" element = {<MyShelf/>}/>
          <Route path="/addBook" element = {<AddBook/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
