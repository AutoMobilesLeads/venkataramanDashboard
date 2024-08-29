import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
import { mockBarData as data } from '../data/mockData';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Initialize bars state with zero values
  const [bars, setBars] = useState(
    data.map(d => ({
      ...d,
      'Driving School': 0,
      'Corporate': 0,
      'Accessories': 0,
      'Finance': 0,
      'Insurance': 0,
      'On Road Price': 0,
      'PopUp': 0,
      'Service': 0,
      '24/7 Service': 0,
      'Contact Us': 0,
      'offers': 0,
      'Showroom': 0,
      'Test Drive': 0,
    }))
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBars(data); // Update bars to actual data after a delay
    }, 500); // Delay the update to see the animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ResponsiveBar
      data={bars}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.primary[1002],
            },
          },
          legend: {
            text: {
              fill: colors.primary[1002],
            },
          },
          ticks: {
            line: {
              stroke: colors.primary[1002],
              strokeWidth: 1,
            },
            text: {
              fill: colors.primary[1002],
            },
          },
        },
        legends: {
          text: {
            fill: colors.primary[1002],
          },
        },
      }}
      keys={[
        'Driving School', 'Corporate', 'Accessories', 'Finance', 'Insurance',
        'On Road Price', 'PopUp', 'Service', '24/7 Service', 'Contact Us',
        'offers', 'Showroom', 'Test Drive'
      ]}
      indexBy="Month"
      margin={{ top: 0, right: 200, bottom: 35, left: 60 }} // Increase the right margin more
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'greys' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', '1.6']],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 160, // Adjust translateX if necessary
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100, // Reduce itemWidth if necessary
          itemHeight: 10, // Reduce itemHeight if necessary
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
      animate={true}
      motionConfig="gentle" // Change to gentle for a smoother animation
      layout="horizontal" // Change to horizontal layout
    />
  );
};

export default BarChart;
