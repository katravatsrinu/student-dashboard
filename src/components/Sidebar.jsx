import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./sidebar.css";

function Sidebar({ activePage, onPageChange }) {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/40"
  );

  const menuItems = [
    { id: "dashboard", icon: "grid-fill", label: "Dashboard" },
    { id: "classes", icon: "people-fill", label: "All classes" },
    { id: "assignments", icon: "file-text-fill", label: "Assignments" },
    { id: "performance", icon: "bar-chart-fill", label: "Performance" },
    { id: "fees", icon: "currency-rupee", label: "Fee details" },
    { id: "settings", icon: "gear-fill", label: "Settings" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo p-3 border-bottom d-none d-md-flex">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-app-indicator fs-4"></i>
          <h5 className="mb-0">Dashboard</h5>
        </div>
      </div>

      <div className="user-info p-3 border-bottom d-none d-md-flex">
        <div className="d-flex align-items-center gap-2">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div>
            <h6 className="mb-0">K Srinu</h6>
            <small className="text-muted">Intermediate</small>
          </div>
        </div>
      </div>

      <Nav className="nav-menu flex-column flex-grow-1">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.id}
            className={`d-flex align-items-center gap-2 px-3 py-2 ${
              activePage === item.id ? "active bg-primary text-white" : ""
            }`}
            onClick={() => onPageChange(item.id)}
          >
            <i className={`bi bi-${item.icon}`}></i>
            {item.label}
          </Nav.Link>
        ))}
      </Nav>

      <div className="p-3 mt-auto border-top">
        <Nav.Link onClick={handleLogout} className="d-flex align-items-center gap-2">
          <i className="bi bi-box-arrow-right"></i>
          Log out
        </Nav.Link>
      </div>
    </div>
  );
}

export default Sidebar;
