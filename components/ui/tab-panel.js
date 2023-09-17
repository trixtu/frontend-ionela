const { Typography, Box } = require('@mui/material')

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ backgroundColor: 'white' }}>{children}</Box>
      )}
    </div>
  )
}

export default TabPanel
