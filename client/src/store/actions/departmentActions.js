import axios from 'axios';

export const getAllDepartments = async () => {
    const response = await axios.get('http://localhost:8080/api/department');
    const departments = response.data;
    return departments;
}