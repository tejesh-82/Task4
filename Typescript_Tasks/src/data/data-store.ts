import { UnitFeild, UnitType } from "../types/types";

const AllData={
    "Temparature":{
        "Celcius":{name:"celcius"},
        "Fahrenheit":{name:"fahrenheit"}
    },
    "Length":{
        "CentiMeter":{name:"centimeter"},
        "MilliMeter":{name:"millimeter"}
    }
}

export function allUnits(){
    return Object.keys(AllData);
}

export function allSubUnits(unit: UnitType): UnitFeild[] {
    return Object.values(AllData[unit]);
}

export function unitsGenerator(inputOne:number,unitOne:string,unitTwo:string){
    if(unitOne=='celcius'){
        if(unitTwo=='fahrenheit'){
            return (inputOne*9/5)+32;
        }
    }
    else if(unitOne=='fahrenheit'){
        if(unitTwo=='celcius'){
            return (5 / 9) * (inputOne - 32)
        }
    }
    else if(unitOne=='centimeter'){
        if(unitTwo=='millimeter'){
            return inputOne*10
        }
    }
    else if(unitOne=='millimeter'){
        if(unitTwo=='centimeter'){
            return inputOne/10
        }
    }
}

