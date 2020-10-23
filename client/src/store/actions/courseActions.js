import axios from 'axios';

const config = {headers: {'Content-Type': 'application/json'}};

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