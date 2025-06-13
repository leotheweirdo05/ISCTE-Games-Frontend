import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import MenuItems from "./MenuItems";
import {FaHome, FaCalendar, FaBook, FaCreditCard, FaTh} from "react-icons/fa";

const BottomNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState(null); // Track active nav item
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleMenuItemClick = (item) => {
    console.log(`Menu item clicked: ${item.label}`);
    setShowMenu(false);
  };

  const handleNavClick = (navItem) => {
    console.log(`Navigating to ${navItem}`);
    switch (navItem) {
      case "Home":
        navigate("/");
        break;
      case "Calendar":
        console.log("Opening calendar...");
        break;
      case "Course":
        console.log("Opening course page...");
        break;
      case "Payments":
        console.log("Opening payments page...");
        break;
      default:
        console.log("Unknown navigation item");
    }
  };

  // Handle icon press (turn blue)
  const handleTouchStart = (navItem) => {
    setActiveNav(navItem);
  };

  // Handle icon release (revert color)
  const handleTouchEnd = () => {
    setActiveNav(null);
  };

  return (
    <>
      <nav
        className="navbar fixed-bottom bg-white border-top shadow-sm py-2"
        style={{height: "clamp(60px, 10vh, 72px)"}}>
        <div className="container-fluid d-flex justify-content-around align-items-end text-center position-relative">
          {/* Home */}
          <button
            className="nav-item btn p-2 border-0 bg-transparent d-flex flex-column align-items-center justify-content-center"
            onClick={() => handleNavClick("Home")}
            style={{
              cursor: "pointer",
              width: "clamp(40px, 12vw, 56px)",
              height: "clamp(40px, 12vw, 56px)",
              touchAction: "manipulation",
            }}
            onTouchStart={() => handleTouchStart("Home")}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => handleTouchStart("Home")} // Support mouse clicks
            onMouseUp={handleTouchEnd}>
            <FaHome
              className={
                activeNav === "Home"
                  ? "iscte-bluer-text mb-1"
                  : "text-muted mb-1"
              }
              style={{fontSize: "clamp(1rem, 3vw, 1.3rem)"}}
            />
            <small
              className={
                activeNav === "Home" ? "iscte-bluer-text" : "text-muted"
              }
              style={{
                fontSize: "clamp(0.5rem, 2vw, 0.7rem)",
                fontWeight: "500",
              }}>
              HOME
            </small>
          </button>

          {/* Calendar */}
          <button
            className="nav-item btn p-2 border-0 bg-transparent d-flex flex-column align-items-center justify-content-center"
            onClick={() => handleNavClick("Calendar")}
            style={{
              cursor: "pointer",
              width: "clamp(40px, 12vw, 56px)",
              height: "clamp(40px, 12vw, 56px)",
              touchAction: "manipulation",
            }}
            onTouchStart={() => handleTouchStart("Calendar")}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => handleTouchStart("Calendar")}
            onMouseUp={handleTouchEnd}>
            <FaCalendar
              className={
                activeNav === "Calendar"
                  ? "iscte-bluer-text mb-1"
                  : "text-muted mb-1"
              }
              style={{fontSize: "clamp(1rem, 3vw, 1.3rem)"}}
            />
            <small
              className={
                activeNav === "Calendar" ? "iscte-bluer-text" : "text-muted"
              }
              style={{
                fontSize: "clamp(0.5rem, 2vw, 0.7rem)",
                fontWeight: "500",
              }}>
              CALENDAR
            </small>
          </button>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="bg-white d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "clamp(50px, 15vw, 68px)",
              height: "clamp(50px, 15vw, 68px)",
              marginTop: "clamp(-30px, -6vh, -44px)",
              border: "none",
              cursor: "pointer",
              touchAction: "manipulation",
              transition: "all 0.2s ease",
              boxShadow:
                "0 8px 20px rgba(13, 40, 194, 0.4), 0 4px 8px rgba(13, 40, 194, 0.4)",
              position: "relative",
            }}
            onTouchStart={() => handleTouchStart("Menu")}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => handleTouchStart("Menu")}
            onMouseUp={handleTouchEnd}>
            <FaTh
              className={
                activeNav === "Menu" ? "iscte-bluer-text" : "iscte-bluer-text"
              }
              style={{fontSize: "clamp(1.2rem, 3.5vw, 1.5rem)"}}
            />
            <small
              className={
                activeNav === "Menu" ? "iscte-bluer-text" : "iscte-bluer-text"
              }
              style={{
                fontSize: "clamp(0.5rem, 2vw, 0.65rem)",
                fontWeight: "600",
              }}>
              MENU
            </small>
          </button>

          {/* Degree */}
          <button
            className="nav-item btn p-2 border-0 bg-transparent d-flex flex-column align-items-center justify-content-center"
            onClick={() => handleNavClick("Course")}
            style={{
              cursor: "pointer",
              width: "clamp(40px, 12vw, 56px)",
              height: "clamp(40px, 12vw, 56px)",
              touchAction: "manipulation",
            }}
            onTouchStart={() => handleTouchStart("Course")}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => handleTouchStart("Course")}
            onMouseUp={handleTouchEnd}>
            <FaBook
              className={
                activeNav === "Course"
                  ? "iscte-bluer-text mb-1"
                  : "text-muted mb-1"
              }
              style={{fontSize: "clamp(1rem, 3vw, 1.3rem)"}}
            />
            <small
              className={
                activeNav === "Course" ? "iscte-bluer-text" : "text-muted"
              }
              style={{
                fontSize: "clamp(0.5rem, 2vw, 0.7rem)",
                fontWeight: "500",
              }}>
              DEGREE
            </small>
          </button>

          {/* Payments */}
          <button
            className="nav-item btn p-2 border-0 bg-transparent d-flex flex-column align-items-center justify-content-center"
            onClick={() => handleNavClick("Payments")}
            style={{
              cursor: "pointer",
              width: "clamp(40px, 12vw, 56px)",
              height: "clamp(40px, 12vw, 56px)",
              touchAction: "manipulation",
            }}
            onTouchStart={() => handleTouchStart("Payments")}
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => handleTouchStart("Payments")}
            onMouseUp={handleTouchEnd}>
            <FaCreditCard
              className={
                activeNav === "Payments"
                  ? "iscte-bluer-text mb-1"
                  : "text-muted mb-1"
              }
              style={{fontSize: "clamp(1rem, 3vw, 1.3rem)"}}
            />
            <small
              className={
                activeNav === "Payments" ? "iscte-bluer-text" : "text-muted"
              }
              style={{
                fontSize: "clamp(0.5rem, 2vw, 0.7rem)",
                fontWeight: "500",
              }}>
              PAYMENTS
            </small>
          </button>
        </div>
      </nav>

      {/* Custom Popup Menu */}
      {showMenu && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000}}
            onClick={toggleMenu}
          />
          <div
            className="position-fixed bottom-0 start-0 w-100 bg-white rounded-top"
            style={{
              zIndex: 1001,
              maxHeight: "75vh",
              height: "75vh",
              overflowY: "auto",
              padding: "1.5rem 0 2rem",
              boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
            }}>
            <div className="d-flex justify-content-between align-items-center mb-4 px-4">
              <h5 className="mb-0 fw-bold">Menu</h5>
              <button
                className="btn btn-link text-decoration-none p-2"
                onClick={toggleMenu}
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 1.8rem)",
                  lineHeight: 1,
                  touchAction: "manipulation",
                  minWidth: "clamp(36px, 10vw, 44px)",
                  minHeight: "clamp(36px, 10vw, 44px)",
                }}
                onTouchStart={(e) =>
                  (e.currentTarget.style.transform = "scale(0.9)")
                }
                onTouchEnd={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }>
                ×
              </button>
            </div>
            <MenuItems onItemClick={handleMenuItemClick} />
          </div>
        </>
      )}

      <style jsx>{`
        @media (max-width: 576px) {
          .container-fluid {
            gap: 0.5rem;
            padding: 0 0.5rem;
          }
          .nav-item {
            padding: 0.5rem !important;
          }
        }
        @media (max-width: 400px) {
          .container-fluid {
            gap: 0.25rem;
            padding: 0 0.25rem;
          }
          .nav-item small {
            fontsize: clamp(0.4rem, 1.8vw, 0.6rem) !important;
          }
          .nav-item i {
            fontsize: clamp(0.9rem, 2.8vw, 1.1rem) !important;
          }
        }
      `}</style>
    </>
  );
};

export default BottomNav;
