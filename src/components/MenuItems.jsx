import {Link} from "react-router-dom";
import React, {useState} from "react";
import {
  FaNewspaper,
  FaCalendarAlt,
  FaQuestionCircle,
  FaSearch,
  FaBook,
  FaTableTennis,
  FaMap,
  FaUtensils,
  FaInfoCircle,
  FaGamepad,
} from "react-icons/fa";

const MenuItems = ({onItemClick}) => {
  const [activeItem, setActiveItem] = useState(null); // Track active menu item

  const menuItems = [
    {icon: <FaNewspaper />, label: "Notices", id: "news"},
    {icon: <FaCalendarAlt />, label: "Events", id: "events"},
    {icon: <FaQuestionCircle />, label: "Help", id: "help"},
    {icon: <FaSearch />, label: "Directory", id: "directory"},
    {icon: <FaBook />, label: "Library", id: "library"},
    {icon: <FaTableTennis />, label: "Sports", id: "sports"},
    {icon: <FaMap />, label: "Map", id: "map"},
    {icon: <FaUtensils />, label: "Food", id: "food"},
    {icon: <FaInfoCircle />, label: "Utilities Info", id: "info"},
    {icon: <FaGamepad />, label: "Games", id: "games", to: "/games"},
  ];

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item.label}`);
    switch (item.id) {
      case "news":
        console.log("Opening news...");
        break;
      case "events":
        console.log("Opening events...");
        break;
      case "help":
        console.log("Opening help...");
        break;
      case "directory":
        console.log("Opening directory...");
        break;
      case "library":
        console.log("Opening library...");
        break;
      case "sports":
        console.log("Opening sports...");
        break;
      case "map":
        console.log("Opening map...");
        break;
      case "food":
        console.log("Opening food info...");
        break;
      case "info":
        console.log("Opening useful info...");
        break;
      default:
        console.log("Unknown menu item");
    }
    if (onItemClick) {
      onItemClick(item);
    }
  };

  // Handle icon press (turn blue)
  const handleTouchStart = (itemId) => {
    setActiveItem(itemId);
  };

  // Handle icon release (revert color)
  const handleTouchEnd = () => {
    setActiveItem(null);
  };

  return (
    <div className="container-fluid px-3">
      <div className="row g-3">
        {menuItems.map((item, index) => (
          <div className="col-4" key={index}>
            {item.to ? (
              // Items with routes (like Games)
              <Link
                to={item.to}
                className="text-decoration-none"
                onClick={() => onItemClick && onItemClick(item)}>
                <div className="d-flex flex-column align-items-center">
                  <button
                    className="btn p-0 border-0 bg-light rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "72px",
                      height: "72px",
                      minHeight: "72px",
                      transition: "all 0.2s ease",
                      touchAction: "manipulation",
                    }}
                    onTouchStart={() => handleTouchStart(item.id)}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={() => handleTouchStart(item.id)}
                    onMouseUp={handleTouchEnd}>
                    <span
                      className={
                        activeItem === item.id
                          ? "iscte-bluer-text"
                          : "text-muted"
                      }
                      style={{fontSize: "1.8rem"}}>
                      {item.icon}
                    </span>
                  </button>
                  <small
                    className={
                      activeItem === item.id
                        ? "iscte-bluer-text text-center mt-2 fw-medium"
                        : "text-dark text-center mt-2 fw-medium"
                    }
                    style={{
                      fontSize: "0.8rem",
                      lineHeight: "1.1",
                      maxWidth: "80px",
                      wordBreak: "break-word",
                    }}>
                    {item.label}
                  </small>
                </div>
              </Link>
            ) : (
              // Regular menu items
              <div className="d-flex flex-column align-items-center">
                <button
                  className="btn p-0 border-0 bg-light rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  onClick={() => handleItemClick(item)}
                  style={{
                    width: "72px",
                    height: "72px",
                    minHeight: "72px",
                    transition: "all 0.2s ease",
                    touchAction: "manipulation",
                  }}
                  onTouchStart={() => handleTouchStart(item.id)}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={() => handleTouchStart(item.id)}
                  onMouseUp={handleTouchEnd}>
                  <span
                    className={
                      activeItem === item.id ? "iscte-bluer-text" : "text-muted"
                    }
                    style={{fontSize: "1.8rem"}}>
                    {item.icon}
                  </span>
                </button>
                <small
                  className={
                    activeItem === item.id
                      ? "iscte-bluer-text text-center mt-2 fw-medium"
                      : "text-dark text-center mt-2 fw-medium"
                  }
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: "1.1",
                    maxWidth: "80px",
                    wordBreak: "break-word",
                  }}>
                  {item.label}
                </small>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
