import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { mockTransactions } from "../../data/mockData";
import React, { useState } from "react";
import { rowFirst , last2daysLeads } from "../../data/mockData";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
// import MyPieChart from "../../components/MyPieChart";
// import { MdLeaderboard } from "react-icons/md";
import BarChart2 from "../../components/BarChart2";

const allDataValue = rowFirst.AllData;
let Service = rowFirst.Service + rowFirst["24/7 Service"];

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleBoxClick = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        mx: "10px",
        backgroundColor: "black",
        marginTop: "-34px",
        borderRadius: "30px",
        height: "160px",
        paddingTop: "10px",
        "&.MuiBox-root css-y0u0hj": { backgroundColor: "black" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f5f5f6",
          my: "20px",
          height: {
            xs: "auto",
            sm: "90vh",
            md: "90vh",
            lg: "90vh",
            xl: "90vh",
          },
          borderRadius: "30px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "70px", paddingTop: "15px", paddingLeft: "20px" }}
        >
          <Box mt="20px" mb="10px" ml="20px">
            <Typography
              variant="h3"
              color={colors.grey[700]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              DASHBOARD
            </Typography>
            <Typography variant="h5" color={colors.redAccent[1000]}>
              Welcome to your dashboard
            </Typography>
          </Box>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="12vh"
          gap="14px"
          sx={{ padding: "36px" }}
        >
          {/* ROW 1 */}
          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 6",
              md: "span 4",
              lg: "span 2",
            }}
            sx={{ borderRadius: "20px" }}
          >
            <Box
              backgroundColor="white"
              sx={{
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#c2c2c2",
                },
              }}
              onClick={() => handleBoxClick("/popup")}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <StatBox
                title="Popups"
                subtitle={rowFirst.PopUp}
                progress={rowFirst.PopUp / allDataValue}
                increase={`${Math.floor(
                  (rowFirst.PopUp / allDataValue) * 100
                )}%`}
                textColor={hoveredIndex === 0 ? "white" : "#c2c2c2"}
              />
            </Box>
          </Box>

          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 6",
              md: "span 4",
              lg: "span 2",
            }}
            sx={{ borderRadius: "20px" }}
          >
            <Box
              backgroundColor="white"
              sx={{
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#c2c2c2",
                },
              }}
              onClick={() => handleBoxClick("/onroadprice")}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <StatBox
                title="On Road Prices"
                subtitle={rowFirst["On Road Price"]}
                progress={rowFirst["On Road Price"] / allDataValue}
                increase={`${Math.floor(
                  (rowFirst["On Road Price"] / allDataValue) * 100
                )}%`}
                textColor={hoveredIndex === 1 ? "white" : "#c2c2c2"}
              />
            </Box>
          </Box>

          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 6",
              md: "span 4",
              lg: "span 2",
            }}
            sx={{ borderRadius: "20px" }}
          >
            <Box
              backgroundColor="white"
              sx={{
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#c2c2c2",
                },
              }}
              onClick={() => handleBoxClick("/bookaservice")}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <StatBox
                title="Service"
                subtitle={Service}
                progress={rowFirst.Service / allDataValue}
                increase={`${Math.floor(
                  (rowFirst.Service / allDataValue) * 100
                )}%`}
                textColor={hoveredIndex === 2 ? "white" : "#c2c2c2"}
              />
            </Box>
          </Box>

          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 6",
              md: "span 4",
              lg: "span 2",
            }}
            sx={{ borderRadius: "20px" }}
          >
            <Box
              backgroundColor="white"
              sx={{
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#c2c2c2",
                },
              }}
              onClick={() => handleBoxClick("/finance")}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <StatBox
                title="Finance"
                subtitle={rowFirst.Finance}
                progress={rowFirst.Finance / allDataValue}
                increase={`${Math.floor(
                  (rowFirst.Finance / allDataValue) * 100
                )}%`}
                textColor={hoveredIndex === 3 ? "white" : "#c2c2c2"}
              />
            </Box>
          </Box>

          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 6",
              md: "span 4",
              lg: "span 2",
            }}
            sx={{ borderRadius: "20px" }}
          >
            <Box
              backgroundColor="white"
              sx={{
                borderRadius: "20px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                cursor: "pointer",
                padding: "16px",
                height: "110px",
                "&:hover": {
                  backgroundColor: "#c2c2c2",
                },
              }}
              onClick={() => handleBoxClick("/newbox")}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  // sx={{
                  //   mt:"9px"
                  //   }}
                >
                  Yesterday's Leads
                </Typography>
                {/* <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    // backgroundColor: "red",
                    padding: "10px 20px", // Add some padding for better appearance
                    // textAlign: "center", // Ensure the text is centered within the Typography
                    width: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    mt: "5px",
                  }}
                >
                  231
                </Typography> */}
              </Box>
              <Box sx={{ mt: "30px", height: "100%" }}>
                {/* <MdLeaderboard size={35} /> */}
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "bold",
                    // padding: "10px 20px",
                    // backgroundColor: "red",
                    marginLeft: "5px",
                    // No need to specify width here; it's controlled by the parent Box
                  }}
                >
                  {last2daysLeads.yesterdayLeadsCount}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 6",
              md: "span 4",
              lg: "span 2",
            }}
            sx={{ borderRadius: "20px" }}
          >
            <Box
              backgroundColor="white"
              sx={{
                borderRadius: "20px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                cursor: "pointer",
                padding: "16px",
                height: "110px",
                "&:hover": {
                  backgroundColor: "#c2c2c2",
                },
              }}
              onClick={() => handleBoxClick("/newbox")}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between", // Distribute space between children
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  // sx={{
                  // mt:"9px"
                  // }}
                >
                  Today's Leads
                </Typography>
                {/* <Typography
    variant="h3"
    sx={{
      fontWeight: "bold",
      // padding: "10px 20px",
      backgroundColor:"red",
      marginLeft:"5px"
      // No need to specify width here; it's controlled by the parent Box
    }}
  >
    231
  </Typography> */}
              </Box>

              <Box sx={{ mt: "25px", height: "100%" ,mr:"5px"}}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "bold",
                    // padding: "10px 20px",
                    // backgroundColor: "red",
                    marginLeft: "5px",
                    // No need to specify width here; it's controlled by the parent Box
                  }}
                >
                  {last2daysLeads.todayLeadCount }
                </Typography>
                {/* <MdLeaderboard size={35} /> */}
              </Box>
            </Box>
          </Box>

          {/* ROW 2 */}
          <Box
            gridColumn="span 7"
            gridRow="span 2"
            backgroundColor="white"
            sx={{ borderRadius: "10px" }}
          >
            <Box
              mt="10px"
              p="0 20px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                fontWeight="400"
                color={colors.primary[1002]}
              >
                MONTHLY Lead CREATION
              </Typography>
            </Box>
            <Box height="230px" m="-20px -60px 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          <Box
            gridColumn="span 5"
            gridRow="span 2"
            backgroundColor="white"
            overflow="auto"
            sx={{ borderRadius: "10px" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.primary[1002]}
                variant="h5"
                fontWeight="600"
              >
                Recent Leads
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[1002]}`}
              p="15px"
              sx={{
                backgroundColor: colors.grey[200],
                borderRadius: "15px",
                mt: "10px",
              }}
            >
              <Typography
                color={colors.primary[1002]}
                variant="body2"
                fontWeight="600"
                sx={{ flex: 1 }}
              >
                Phone
              </Typography>
              <Typography
                color={colors.primary[1002]}
                variant="body2"
                fontWeight="600"
                sx={{ flex: 1, marginRight: "19px" }}
              >
                LeadFrom
              </Typography>
              <Typography
                color={colors.primary[1002]}
                variant="body2"
                fontWeight="600"
                sx={{ flex: 1 }}
              >
                Date
              </Typography>
              <Typography
                color={colors.primary[1002]}
                variant="body2"
                fontWeight="600"
                sx={{ flex: 1 }}
              >
                Time
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.phone}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`1px solid ${colors.primary[1002]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.redAccent[400]}
                    variant="h6"
                    fontWeight="600"
                  >
                    {transaction.phone}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.primary[1002]}>{transaction.leadFrom}</Box>
                <Box color={colors.primary[1002]}>{transaction.date}</Box>
                <Box color={colors.primary[1002]}>{transaction.time}</Box>
              </Box>
            ))}
          </Box>

          {/* ROW 3 */}
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor="white"
            p="30px"
            sx={{ borderRadius: "10px", height: "350px" }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.primary[1002]}
            >
              Comparison
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="-70px"
              height={"320px"}
            >
              <Box sx={{ height: "200px", marginTop: "50px" }}>
              <BarChart2 />
              </Box>
            </Box>
          </Box>

          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor="white"
            sx={{ borderRadius: "10px", height: "350px" }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "20px 20px 0 20px" }}
              color={colors.primary[1002]}
            >
              Vehicle Enquiries
            </Typography>
            <Box sx={{ height: "200px", marginTop: "60px" }}>
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
