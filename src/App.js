import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./components/Login/Login";
import Enquiry from "./scenes/Enquiry";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  const [dataRefreshCounter, setDataRefreshCounter] = useState(0); // Add this state variable

  // Check if the current location is the login page or the root path
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/";

  const refreshData = () => {
    // You can implement your data refresh logic here
    // You might want to fetch new data or update state as needed
    // Increment the dataRefreshCounter to trigger a re-render
    setDataRefreshCounter(dataRefreshCounter + 1);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* Conditionally render the Sidebar and pass the refreshData callback */}
          {isLoginPage ? null : (
            <Sidebar isSidebar={isSidebar} refreshData={refreshData} />
          )}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/enquiry" element={<Enquiry />} />
              {/* <Route path="/popup" element={<Popup />} />
              <Route path="/onroadprice" element={<OnRoadPrice />} />
              <Route path="/corporates" element={<Corporates />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/alldata" element={<AllData />} />
              <Route path="/bookaservice" element={<BookAService />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/drivingschool" element={<DrivingSchool />} />
              <Route
                path="/dashboard"
                element={
                  <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
                    <Dashboard />
                  </div>
                }
              />
              <Route path="/general" element={<Generals />} />
              <Route path="/logout" element={<Logout />} /> */}
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
