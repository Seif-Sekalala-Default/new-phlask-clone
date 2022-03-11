import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  SvgIcon
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../icons/CloseIcon.svg";
import { ReactComponent as PhlaskNoTextIcon } from "../icons/PhlaskNoText.svg";
import { ReactComponent as PhlaskIcon } from "../icons/PHLASK_v2.svg";
import { ReactComponent as PlusCircleIcon } from "../icons/PlusCircle.svg";
import { ReactComponent as UsersIcon } from "../icons/UsersIcon.svg";

const SidebarLink = styled(NavLink)(({ theme }) => ({
  color: "#000",
  textDecoration: "none"
}));

export default function SideBar({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={open}
      onClose={handleClose}
      sx={{
        width: "100%",
        "& .MuiDrawer-paper": {
          width: "262px",
          height: "100%"
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "50px"
        }}
      >
        <IconButton onClick={handleClose}>
          <SvgIcon
            sx={{
              overflow: "visible",
              backgroundColor: "transparent",
              boxShadow: "none",
              marginRight: "15px",
              marginTop: "-10px",
              marginLeft: "10px"
              
            }}
            component={CloseIcon}
          />
        </IconButton>
        <Link to="/" onClick={handleClose}>
          <PhlaskIcon />
        </Link>
      </Box>

      <List>
        <SidebarLink to="mission" onClick={handleClose}>
          <ListItemButton>
            <ListItemIcon sx={{ marginLeft: "-1px" }}>
              <PhlaskNoTextIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItemButton>
        </SidebarLink>

        <SidebarLink to="share" onClick={handleClose}>
          <ListItemButton>
            <ListItemIcon sx={{ marginLeft: "-4px" }}>
              <PlusCircleIcon />
            </ListItemIcon>
            <ListItemText>Add Resources</ListItemText>
          </ListItemButton>
        </SidebarLink>

        <SidebarLink to="contribute" onClick={handleClose}>
          <ListItemButton>
            <ListItemIcon sx={{ marginLeft: "-3px" }}>
              <UsersIcon />
            </ListItemIcon>
            <ListItemText>Join Team</ListItemText>
          </ListItemButton>
        </SidebarLink>
      </List>
    </Drawer>
  );
}
