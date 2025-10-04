import { useState } from "react";
import Icons from "../../../shared/icons/index.tsx";
import "./MainMenu.css";

const menuItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "prescription", label: "My Prescriptions" },
  { icon: "appointment", label: "Appointments" },
  { icon: "chat", label: "Chat" },
  { icon: "doctor", label: "Find a doctor" },
  { icon: "setting", label: "Settings" },
  { icon: "blog", label: "Blog" },
  { icon: "support", label: "Support" },
];

function MainMenu() {
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="main-menu">
      {menuItems.map((item, index) => {
        const isActive = selected === item.icon;
        return (
          <div
            key={index}
            className={`main-menu-item ${isActive ? "selected" : ""}`}
            onClick={() => setSelected(item.icon)}
          >
            <span className="main-menu-icon">
              <Icons
                name={item.icon}
                color={isActive ? "#fff" : "#8b8b8b"}
                size={20}
              />
            </span>
            <span className="main-menu-label">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MainMenu;
