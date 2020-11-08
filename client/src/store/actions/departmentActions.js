import axios from 'axios';

//get all departments
export const getAllDepartments = async () => {
    const response = await axios.get('http://localhost:8080/api/department');
    const departments = response.data;
    return departments;
}