import "./sidebar.scss";
import logo from "./../../img/logo.png";
import home from "./../../img/icon-home.png";
import search from "./../../img/icon-search.png";
import bookshelf from "./../../img/icon-bookshelf.png";
import contribute from "./../../img/icon-contribute.png";

function Sidebar() {
  return (
    <div id="sidebar">
      <img src={logo} alt={"logo"} className="logo" />
      <div className="menu">
        <div className="menu_item">
          <img src={home} alt="Home" />
          <span>Home</span>
        </div>
        <div className="menu_item">
          <img src={search} alt="Search" />
          <span>Search</span>
        </div>
        <div className="menu_item">
          <img src={bookshelf} alt="My Shelf" />
          <span>My Shelf</span>
        </div>
        <div className="menu_item">
          <img src={contribute} alt="Contribute" />
          <span>Contribute</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
