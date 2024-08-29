import {
  Box,
  useTheme,
  IconButton,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  DataGrid,
  
} from "@mui/x-data-grid";
import DownloadIcon from "@mui/icons-material/Download";
// import RefreshIcon from "@mui/icons-material/Refresh";
import { AiOutlineReload } from "react-icons/ai";

const Enquiry = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [col, setCol] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        if (!token) {
          navigate("/login");
          return;
        }
        const res = await axios.get(
          "https://backend-7aeg.onrender.com/getEnquiry",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCol([
          { field: "id", headerName: "ID", width: 60 },
          {
            field: "name",
            headerName: "Name",
            flex: 0.75,
            cellClassName: "name-column--cell",
          },
          {
            field: "phone",
            headerName: "Phone Number",
            flex: 0.5,
            cellClassName: "phone-column--cell",
          },
          {
            field: "email",
            headerName: "Email",
            flex: 1,
          },
          {
            field: "model",
            headerName: "Model",
            flex: 0.75,
          },
          {
            field: "date",
            headerName: "Date",
            flex: 0.5,
          },
          {
            field: "time",
            headerName: "Time",
            width: 100,
          },
        ]);
        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        window.alert("token expired");
        navigate("/login");
        setLoading(false);
      }
    }
    fetchData();
  }, [navigate]);

  let newData = data.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  // Custom filter function
  const filteredData = newData.filter((row) => {
    return (
      row.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.model?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.date?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.time?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleReset = async () => {
    try {
      setSearchQuery(""); // Clear the search query
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/login");
        return;
      }
      const res = await axios.get(
        "https://backend-7aeg.onrender.com/getEnquiry",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCol([
        { field: "id", headerName: "ID", width: 60 },
        {
          field: "name",
          headerName: "Name",
          flex: 0.75,
          cellClassName: "name-column--cell",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 0.5,
          cellClassName: "phone-column--cell",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "model",
          headerName: "Model",
          flex: 0.75,
        },
        {
          field: "date",
          headerName: "Date",
          flex: 0.5,
        },
        {
          field: "time",
          headerName: "Time",
          width: 100,
        },
      ]);
      setData(res.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      window.alert("token expired");
      navigate("/login");
      setLoading(false);
    }
  };

  const handleDownloadCSV = () => {
    const csvData = [];
    const headers = col.map((column) => column.headerName);
    csvData.push(headers.join(","));

    newData.forEach((row) => {
      const rowData = col.map((column) => row[column.field]);
      csvData.push(rowData.join(","));
    });

    const csvContent = csvData.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Enquires.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="10px">
      <Header title="Generals" subtitle="all data from rest of the forms" />
      <Box display="flex" justifyContent="space-between">
        {/* <Box display="flex">
          {selectedView && (
            <Typography
              variant="h5"
              p="10px"
              borderRadius="4px"
              color={colors.grey[800]}
            >
              (Viewing {selectedView})
            </Typography>
          )}
        </Box> */}
        <Box display="flex" alignItems="center">
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ marginRight: "16px" }}
          />
          <IconButton onClick={handleDownloadCSV}>
            <DownloadIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton onClick={handleReset}>
            <AiOutlineReload sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Box>
      <Box height="75vh" mt="20px">
        <DataGrid
          rows={filteredData} // Use filtered data instead of all data
          columns={col}
          loading={loading}
          error={error}
          sx={{
            backgroundColor: "white",
            fontSize: 15,
            "& .MuiDataGrid-columnHeader": {
              color: "white",
              backgroundColor: colors.VenkataramanaColors[100],
            },
          }}
       
        />
      </Box>
    </Box>
  );
};

export default Enquiry;
