import React, { useEffect } from "react";
import { Drawer, List, ListItemText, ListItemButton, Collapse, ListItemIcon, Toolbar } from "@mui/material";
import { ExpandLess, ExpandMore, Home, Login, Business, Add, Visibility, List as ListIcon, Menu } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };

    
  useEffect(() => {
    if (collapsed) {
      document.getElementsByClassName("mainContainer")[0].classList.add("menu-collapsed");
    } else {
      document.getElementsByClassName("mainContainer")[0].classList.remove("menu-collapsed");
    }
  }, [collapsed]);


  return (
    <Drawer className="sidebar_custm" variant="permanent" anchor="left" sx={{ 
        width: collapsed ? 80 : 265, 
        flexShrink: 0, 
        transition: "width 0.3s ease-in-out"
      }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}>
        <img src="https://dev.channelier.com/img/new/logo.png" alt="Logo" style={{ height: 40, display: collapsed ? "none" : "block" }} />
        <Menu onClick={() => setCollapsed(!collapsed)} sx={{ cursor: "pointer", ml: collapsed ? 0 : 2 }} />
      </Toolbar>
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          {!collapsed && <ListItemText primary="Home" />}
        </ListItemButton>
        <ListItemButton component={Link} to="/login">
          <ListItemIcon><Login /></ListItemIcon>
          {!collapsed && <ListItemText primary="Login" />}
        </ListItemButton>
        <ListItemButton component={Link} to="/list">
          <ListItemIcon><ListIcon /></ListItemIcon>
          {!collapsed && <ListItemText primary="Organisation List" />}
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon><Business /></ListItemIcon>
          {!collapsed && <ListItemText primary="Organisation" />}
          {!collapsed && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/add-organisation" sx={{ pl: 4 }}>
              <ListItemIcon><Add /></ListItemIcon>
              {!collapsed && <ListItemText primary="Add Organisation" />}
            </ListItemButton>
            <ListItemButton component={Link} to="/view-organisation" sx={{ pl: 4 }}>
              <ListItemIcon><Visibility /></ListItemIcon>
              {!collapsed && <ListItemText primary="View Organisation" />}
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
