import axios from 'axios';

export const getCoursesInDepartment = async (departmentId) => {
    const response = await axios.get(`http://localhost:8080/api/course/${departmentId}`);
    const courses = response.data;

    for(let i=0;i<courses.length;i++){
        const {departmentId} = courses[i];

        const response = await axios.get(`http://localhost:8080/api/department/${departmentId}`);
        const {code} = response.data;
       
        courses[i].departmentCode = code;
    }

    return courses;
}

export const getAllCourses = async () => {
    const response = await axios.get('http://localhost:8080/api/course');
    const courses = response.data;

    for(let i=0;i<courses.length;i++){
        const {departmentId} = courses[i];

        const response = await axios.get(`http://localhost:8080/api/department/${departmentId}`);
        const {code} = response.data;
       
        courses[i].departmentCode = code;
    }

    return courses;
}
