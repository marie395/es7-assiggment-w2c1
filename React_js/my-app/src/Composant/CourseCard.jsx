// Author: Tsamo Rooswell
const CourseCard = ({ course})=> {
    return(
        <div
        style={{
            border: " 1px solid #ccc",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: course.isEnrolled ? "#d4edda" : "#f8d7da",
        }}>
        
        <h2>{course.title.toUpperCase()}</h2>
        <p><strong>Instructor:</strong>{course.instructor}</p>
        <p><strong>Duration:</strong>{course.duration}</p>

    
         <p><strong>Level:</strong> {course.level}</p>

        
        <span
          style={{
            color: " white",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: course.isEnrolled ? "green" : "red",
        }}
        >
        {
            course.isEnrolled ? "Enroled" : "Not Enrolled"}
        
        </span>
        </div>
    );
}
export default CourseCard;
