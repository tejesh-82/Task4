import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import {EmployeeTable} from './components/EmployeeTable';
import { EmployeeValues } from './types/types';

const App = () => {
  const [employees, setEmployees] = useState<EmployeeValues[]>([]);

  const handleAddUser = (newEmployee: EmployeeValues) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleDelete = (id: number) => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
  };
  return (
    <>
      <AddEmployee onAddUser={handleAddUser} />
      
      <EmployeeTable employees={employees} onDelete={handleDelete}/>
    </>
  );
};

export default App;
