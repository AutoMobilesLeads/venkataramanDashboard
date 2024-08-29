import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme, Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import LogoutIcon from "@mui/icons-material/Logout";
import WhiteLogo from "../../images/logowhite.webp";
// import { red } from "@mui/material/colors";

const Item = ({ title, to, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Tooltip title={title} placement="right">
      <MenuItem
        active={selected === to}
        // style={{
        //   color: selected === to ? colors.VenkataramanaColors[200] : colors.VenkataramanaColors[300],
        // }}
        onClick={() => setSelected(to)}
        icon={
          <span
            style={{
              fontSize: "23px",
            }}
          >
            {icon}
          </span>
        }
      >
        <Typography sx={{ fontSize: "18px" }}>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    </Tooltip>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar is open by default
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        height: "100vh",
        overflow: "hidden", // Prevent overflow from sidebar
        "& .pro-sidebar-inner": {
          background: `${colors.VenkataramanaColors[100]} !important`,
        },
        // "& .pro-icon-wrapper": {
        //   backgroundColor: "transparent !important",
        // },
        // "& .pro-inner-item": {
        //   padding: "5px 35px 5px 20px !important",
        // },
        // "& .pro-inner-item:hover": {
        //   Color:`${colors.VenkataramanaColors[200]} !important`,
        // },
        // "& .pro-menu-item.active": {
        //   color: `${colors.VenkataramanaColors[200]} !important`,
        // },
        // ".custom-submenu-title": {
        //   padding: "4px",
        //   color: "white",
        // },
        // ".custom-submenu-title :hover": {
        //   // backgroundcolor: `${colors.VenkataramanaColors[200]} !important`,
        // },
        // ".custom-submenu-icon": {
        //   color: "white",
        // },
        // ".custom-submenu-icon :hover": {
        //   backgroundcolor: `${colors.VenkataramanaColors[200]} !important`,
        // },
      }}
    >
      <ProSidebar
      // collapsed={isCollapsed}
      // style={{
      //   width: isCollapsed ? "80px" : "1px", // Adjust the width based on the state
      //   transition: "width 0.3s", // Smooth transition for sidebar
      // }}
      >
        <Menu iconShape="square">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            // m="15px"
            my="30px"
            // backgroundColor="green"
          >
            <Typography variant="h3" color={colors.redAccent[100]}>
              <img
                alt="profile-user"
                width="130px"
                height="150px"
                src={WhiteLogo}
              />
            </Typography>
          </Box>

          <Box
            sx={{ height: "80vh", display: "flex", flexDirection: "column" }}
          >
            <Box >
              <Item
                title="AllData"
                to="/enquiry"
                icon={<LeaderboardIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box
              // paddingLeft={isCollapsed ? undefined : "10%"}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "20px", // Add margin at the bottom for spacing
              }}
            >
              {/* <Item
                title="Log Out"
                to="/logout"
                icon={<LogoutIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Box>
          </Box>
        </Menu>
      </ProSidebar>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          // marginLeft: isCollapsed ? "80px" : "550px", // Adjust margin based on sidebar state
          transition: "margin-left 0.3s", // Smooth transition for main content
          padding: "20px",
          overflowX: "hidden", // Prevent horizontal overflow
        }}
      >
        {/* Your main content here */}
      </Box>
    </Box>
  );
};

export default Sidebar;
