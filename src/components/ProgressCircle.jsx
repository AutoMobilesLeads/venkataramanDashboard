import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const ProgressCircle = ({ progress = '0.75', size = '60', textColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  const backgroundColor = textColor === 'white'? "#c2c2c2" : colors.primary[1001];
  // const cirleRemainingProstion = textColor === 'white' ? colors.grey[800] : colors.grey[100]
  return (
    <Box
      sx={{
        background: `radial-gradient(${backgroundColor} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.grey[100]} ${angle}deg 360deg),
            ${colors.primary[1002]}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
