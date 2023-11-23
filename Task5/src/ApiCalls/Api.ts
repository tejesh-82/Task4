import axios from 'axios'
import { EmployeeValues } from '../types/types';

const addEmployee = async (newEmployee: EmployeeValues) => {
  
    return await axios.post('http://localhost:3000/post', newEmployee);

  };
  const getEmployees = async () => {

    const response= await axios.get('http://localhost:3000/get');

    return response.data
  };

  const deleteEmployee = async (id: number) => {

    await axios.delete(`http://localhost:3000/delete/${id}`);


  };
  export {addEmployee, getEmployees, deleteEmployee}