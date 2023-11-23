
import { useState, useEffect } from 'react';
import AddEmployee from './components/AddEmployee';
import { EmployeeTable } from './components/EmployeeTable';
import { EmployeeValues } from './types/types';
import { getEmployees, addEmployee, deleteEmployee } from './ApiCalls/Api';

const App = () => {
  const [employees, setEmployees] = useState<EmployeeValues[]>([]);

  const handleAddUser = async (newEmployee: EmployeeValues) => {
  
    await addEmployee(newEmployee);

    getAllEmployees();
  }

  const getAllEmployees = async () => {

    const response:EmployeeValues[] = await getEmployees();
    console.log(response)
    setEmployees(response);

  };
       

  const handleDelete = async (id: number) => {

    await deleteEmployee(id);
    getAllEmployees();

  };

useEffect (()=>{
  getAllEmployees()
},[])
  return (
    <>
      <AddEmployee onAddUser={handleAddUser} />

      <EmployeeTable employees={employees} onDelete={handleDelete} />
    </>
  );
};

export default App;
