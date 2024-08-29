import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle, selectedView }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mt="5px" mb="30px">
      <Typography
        variant="h3"
        color={colors.grey[700]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
         {title} {selectedView && `(${selectedView})`}
      </Typography>
      <Typography variant="h5" color={colors.redAccent[1000]}>
        {subtitle}
      </Typography>
      {/* {selectedView && (
        <Typography variant="h6" color={colors.grey[300]}>
          Current View: {selectedView}
        </Typography>
      )} */}
    </Box>
  );
};

export default Header;
