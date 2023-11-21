// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Grid from '@mui/material/Grid';

// import { UnitFeild } from '../types/types';
// import { useEffect, useState } from 'react';

// function SubUnitSelect({units, selected, onUnitChange,inputs, onInputChange}: {units: UnitFeild[], selected: string, onUnitChange: (unit: string) => void,inputs: number ,onInputChange: (input: number) => void}) {
//     const handleChange = (event: SelectChangeEvent) => {
//         onUnitChange(event.target.value as string);
//     };

//     const [fieldValue, setFieldValue] = useState<unknown>(inputs);
    
//     useEffect(()=>{
//         setFieldValue(String(inputs));
//         onInputChange(inputs)
//     },[inputs,onInputChange]);

//     const handleInputChange = (event: SelectChangeEvent|any) => {
//       const inputValue = event.target.value;
//       setFieldValue(inputValue);
//       onInputChange(Number(inputValue))
//     };
//     return (
//     <>
//      <Grid container spacing={2}>
//         <Grid item xs={6}>
//             <TextField  type='number' variant="outlined" value={fieldValue} onChange={handleInputChange} style={{ marginBottom: 16 }}/>
//         </Grid>
//         <Grid item xs={6}>
//             <FormControl fullWidth>
//                 <InputLabel id="point-select-input-label">Unit Point</InputLabel>
//                 <Select
//                 labelId="point-select-label"
//                 id="point-select"
//                 value={selected}
//                 label="Unit"
//                 onChange={handleChange}
//                 >
//                 {
//                     units.map((unit) => (<MenuItem  value={unit.name}>{unit.name}</MenuItem>))
//                 }
//                 </Select>
//             </FormControl>
//         </Grid>
//      </Grid>
//     </>
//   )
// }

// export default SubUnitSelect;












import  { ChangeEvent, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import { UnitFeild } from '../types/types';

function SubUnitSelect({ units,selected,onUnitChange,onInputChange,data}: { units: UnitFeild[]; selected: string; onUnitChange: (unit: string) => void; onInputChange: (input: number) => void;data:any}) {
  
  const [res,setRes]=useState<number>(data);
  console.log(res)
  const handleChange = (event: SelectChangeEvent) => {
    onUnitChange(event.target.value as string);
  };

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setRes(Number(event.target.value))
    onInputChange(Number(event.target.value) )
  }

  useEffect(() => {
    setRes(data);
  }, [data]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            type="number"
            variant="outlined"
            value={res}
            onChange={handleInputChange}
            style={{ marginBottom: 16 }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="point-select-input-label">Unit Point</InputLabel>
            <Select
              labelId="point-select-label"
              id="point-select"
              value={selected}
              label="Unit"
              onChange={handleChange}
            >
              {
              units.map((unit) => (
                <MenuItem key={unit.name} value={unit.name}>
                  {unit.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default SubUnitSelect;
