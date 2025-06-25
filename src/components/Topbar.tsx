import React from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { Logout, Person } from "@mui/icons-material";


export default function Topbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setAnchorEl(null);
  };
  return (
    <div className="topbar">
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div></div>
      <div>
        <IconButton onClick={handleMenu} color="inherit">
          <Avatar alt="User Name" src="/user-avatar.png" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem className="menuicon" onClick={handleClose}><Person/> User Name</MenuItem>
          <MenuItem className="menuicon" onClick={handleLogout}><Logout/> Logout</MenuItem>
        </Menu>
      </div>
    </Toolbar>
  </div>
);
}
