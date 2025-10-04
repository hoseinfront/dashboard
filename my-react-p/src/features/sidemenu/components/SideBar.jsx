import MainMenu from "./MainMenu";
import "./SideBar.css";
import { FcMindMap } from "react-icons/fc";

function SideMenu() {
  return (
    <div className="side-bar">
      <div className="side-bar-header">
        <span className="side-bar-header-icon">
          <FcMindMap />
        </span>
        <p>MediConnect</p>
      </div>
      <div>
        <MainMenu />
      </div>
      <div>upgrade</div>
    </div>
  );
}

export default SideMenu;
