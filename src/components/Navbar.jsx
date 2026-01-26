import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import "./css/Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/about",
      label: "About",
      subItems: [
        { path: "/about/mission", label: "Mission & Vision" },
        { path: "/about/team", label: "Our Team" },
        { path: "/about/messagefrom", label: "Message from Chairman" },
      ],
    },
    {
      path: "/services",
      label: "Services",
      subItems: [
        { path: "/services/saving", label: "Saving Schemes" },
        { path: "/services/loan", label: "Loan Schemes" },
        { path: "/services/required", label: "Required Documents" },
      ],
    },
    { path: "/news-events", label: "News & Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/download", label: "Download" },
    { path: "/career", label: "Career" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav ref={navRef}>
      <div className="nav-container navbar">
        <div
          className="mobile-menu"
          onClick={toggleMobileMenu}
          ref={mobileMenuRef}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggleDropdown(index);
                      }
                    }}
                  >
                    {item.label} <FaAngleDown className="dropdown-icon" />
                  </NavLink>
                  <ul
                    className={`dropdown-menu ${openDropdown === index ? "open" : ""
                      }`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            isActive ? "active-link" : ""
                          }
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
