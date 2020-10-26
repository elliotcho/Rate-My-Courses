import axios from 'axios';

const config = {headers: {'Content-Type': 'application/json'}};

export const getAllUsers = async () => {
    const response = await axios.get('http://localhost:8080/api/user');
    const users = response.data;
    return users;
}

export const handleBan = async (data, users) => {
    const response = await axios.post('http://localhost:8080/api/user/ban', JSON.stringify(data), config);
    const updatedUser =  response.data;

    users.forEach((user, i) => {
        if(user.id === data.id){
            users[i] = updatedUser;
        }
    });

    return users;
}

export const createDepartment = async (data) => {
    const response = await axios.post('http://localhost:8080/api/department', data, config);
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

export const createCourse = async (data) => {
    let response = await axios.post('http://localhost:8080/api/course', data, config);
    const newCourse = response.data;

    if(newCourse !== null){
        const {departmentId} = newCourse;

        response = await axios.get(`http://localhost:8080/api/department/${departmentId}`);
        const {code} = response.data;
    
        newCourse.departmentCode = code;
    }

    return newCourse;
}

export const deleteCourse= async (courses, id) => {
    await axios.delete(`http://localhost:8080/api/course/${id}`);

    for(let i=0;i<courses.length;i++){
        if(courses[i].id === id){
            courses.splice(i, 1);
            break;
        }
    }

    return courses;
}