import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../../style/style.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000", // Set the default background color to #000000
    },
    primary: {
      main: "#000000", // Set the primary color to #000000
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          backgroundImage:
            'url("https://www.shutterstock.com/image-vector/data-analytics-icons-on-black-260nw-1248922027.jpg")',
          backgroundSize: "cover", // Optional, adjust as needed
          backgroundRepeat: "no-repeat", // Optional, adjust as needed
        },
      },
    },
  },
});

// ...

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false); // Add a state variable to control the shaking animation

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const clearLocalStorage = () => {
    localStorage.removeItem("authToken");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.status) {
          const token = responseData.data.token;
          localStorage.setItem("authToken", token);
          setTimeout(clearLocalStorage, 60 * 1000); // Clear token after 1 minute
          window.location.href = "/dashboard";
        } else {
          // Handle unsuccessful login, e.g., show an error message.
          setError("Login failed: " + responseData.message);
          setIsShaking(true); // Trigger the shake animation
          setTimeout(() => {
            setIsShaking(false);
          }, 300);
        }
      } else {
        // Handle other network errors and access response data
        setError(responseData.message);
        setIsShaking(true); // Trigger the shake animation
        setTimeout(() => {
          setIsShaking(false);
        }, 300);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setIsShaking(true); // Trigger the shake animation
      setTimeout(() => {
        setIsShaking(false);
      }, 300);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}></Box>

      <Grid container component="main" sx={{ height: "calc(100vh - 64px)" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/specification/Invicto+Spec.webp)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "light",
            backgroundPosition: "center",
            height: "700px",
            width: "500px",
            marginTop: "50px",
            backgroundSize: "contain",
          }}
        />
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              height: "500px",
              width: "400px",
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "100px",
              marginTop: "90px",
              backgroundColor: "#1b1b1b", // Change the background color to your desired dark background color
              padding: "50px",
              boxShadow: "3px 9px 8px 5px rgba(18,18,18,255)", // Add your shadow properties here
              borderRadius: "20px",
              animation: isShaking ? "shake 0.5s" : "",
            }}
          >
            <img
              src="https://saboonexa.in/static/media/logo.549c982d4408c672ca6d.webp"
              alt="Logo"
              height="230"
              width="100"
              style={{ marginRight: "16px", marginTop: "-20px" , marginBottom:"10px" }}
            />
            <Avatar sx={{ m: 1, backgroundColor: "black", color: "white" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
              Sign in
            </Typography>

            {error && <p className="text-danger">{error}</p>}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                value={email}
                onChange={handleEmailChange}
                sx={{
                  backgroundColor: "#1b1b1b",
                  borderColor: "white",
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Change the text color to white
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="off"
                value={password}
                onChange={handlePasswordChange}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={toggleShowPassword}
                      aria-label={
                        showPassword ? "Hide Password" : "Show Password"
                      }
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  ),
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Change the text color to white
                }}
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#FF0000",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#FF0000",
                    borderRadius: "10px",
                    boxShadow: "1px 6px 20px 5px rgba(255, 0, 0, 0.3)", // Set the color to red
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
