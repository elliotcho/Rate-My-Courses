import axios from 'axios';

const config = {headers: {'Content-Type': 'application/json'}};

export const getAllDepartments = async () => {
    const response = await axios.get('http://localhost:8080/api/department');
    const departments = response.data;
    return departments.reverse();
}

export const createDepartment = async (name, code) => {
    const response = await axios.post('http://localhost:8080/api/department', {name, code}, config);
    const newDepartment = response.data;
    return newDepartment;
}

export const deleteDepartment = async (departments, id) => {
    await axios.delete(`http://localhost:8080/api/department/${id}`);

    for(let i=0;i<departments.length;i++){
        if(departments[i].id === id){
            departments.splice(i, 1);
            break;
        }
    }

    return departments;
}