import axios from 'axios';

export const getCourseById = async (courseId) => {
    let response = await axios.get(`http://localhost:8080/api/course/info/${courseId}`);
    const course = response.data;

    const {departmentId} = course;
    response = await axios.get(`http://localhost:8080/api/department/${departmentId}`);
    const {code} = response.data;
       
    course.departmentCode = code;

    return course;
}

export const getCoursesInDepartment = async (departmentId) => {
    let response = await axios.get(`http://localhost:8080/api/course/${departmentId}`);
    const courses = response.data;

    for(let i=0;i<courses.length;i++){
        const {departmentId} = courses[i];

        response = await axios.get(`http://localhost:8080/api/department/${departmentId}`);
        const {code} = response.data;
       
        courses[i].departmentCode = code;
    }

    return courses;
}

export const getAllCourses = async () => {
    let response = await axios.get('http://localhost:8080/api/course');
    const courses = response.data;

    for(let i=0;i<courses.length;i++){
        const {departmentId} = courses[i];

        response = await axios.get(`http://localhost:8080/api/department/${departmentId}`);
        const {code} = response.data;
       
        courses[i].departmentCode = code;
    }

    return courses;
}