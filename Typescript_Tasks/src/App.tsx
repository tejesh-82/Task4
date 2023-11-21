import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useState } from "react"
import UnitsSelect from "./components/UnitsSelect"
import { UnitType } from "./types/types";
import UnitContext from './context/units';
import MeasurementCal from './components/MeasurementCal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [selectedUnit,setSelectedUnit]=useState('');

  function handleUnitChange(unit:UnitType){
    setSelectedUnit(unit)
  }
  return (
    <>
    <UnitContext.Provider value={{selectedUnit}}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <UnitsSelect unit={selectedUnit} onUnitChange={handleUnitChange} />
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
          {selectedUnit && <MeasurementCal></MeasurementCal>}
          </Item>
        </Grid>
      </Grid>
    </Box>
    </UnitContext.Provider>
    </>
  )
}

export default App
