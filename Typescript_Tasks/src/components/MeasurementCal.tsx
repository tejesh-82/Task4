import { useContext, useMemo, useState } from "react"
import UnitContext from "../context/units"
import { UnitType } from "../types/types";
import { allSubUnits, unitsGenerator } from "../data/data-store";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SubUnitSelect from "./SubUnitSelect";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const MeasurementCal = () => {
    const {selectedUnit}=useContext(UnitContext);
    
    const [unitOne,setUnitOne]=useState('');
    const [unitTwo,setUnitTwo]=useState('');

    const [inputOne,setInputOne]=useState<any>()
    const [inputTwo,setInputTwo]=useState<any>()

    let units = useMemo(() => {
        return selectedUnit ? allSubUnits(selectedUnit as UnitType) : [];
    }, [selectedUnit]);

    function handleUnitOneChange(unit: string) {
        setUnitOne(unit);
    }

    function handleUniTwoChange(unit: string) {
        setUnitTwo(unit);
    }

    function handleInputOneChange(input: number){
        setInputOne(input);
    }

    function handleInputTwoChange(input: number){
        setInputTwo(input)
    }
    const result1 = useMemo(() => unitsGenerator(inputOne, unitOne, unitTwo), [inputOne, unitOne, unitTwo]);
    const result2 = useMemo(() => unitsGenerator(inputTwo, unitTwo,unitOne), [inputTwo, unitTwo, unitOne]);

    return (
    <>
       <Paper>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                    <SubUnitSelect units={units} selected={unitOne} onUnitChange={handleUnitOneChange}  onInputChange={handleInputOneChange} data={result2} />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                    <SubUnitSelect units={units} selected={unitTwo} onUnitChange={handleUniTwoChange}  onInputChange={handleInputTwoChange} data={result1} />
                    </Item>
                </Grid>
            </Grid>
        </Paper>
    </>
  )
}

export default MeasurementCal






