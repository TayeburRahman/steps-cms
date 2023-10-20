import { Avatar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
// import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.avif";
function NavBar() {
  // const { pathname } = useLocation();

  // const [users, setUsers] = useState([]);
  // const { user } = useAuth()
  // const email = user?.email

  // useEffect(() => {
  //   axios.get(`https://server.unwraptools.io/api/v1/user/getUsers/${email}`)
  //     .then(res => {
  //       setUsers(res?.data.user)
  //     })

  // }, [])
  return (
    <Box className="navbar nav-dashboard" sx={{ width: "100%" }}>
        <Typography
          component="h1"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, color: "#000000b8", fontFamily: "sans-serif " }}
        >
           <img alt="Remy Sharp" src={logo} width="150px" />
        </Typography>
      <Box className="avatar" display={"flex"} justifyContent={"center"} >
        <Avatar alt="Remy Sharp" src={profile}  />
      </Box>
    </Box>
  );
}

export default NavBar;
