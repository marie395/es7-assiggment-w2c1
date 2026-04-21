import MovieCard from "./Composant/MovieCard";

function App(){

  const movies = [
    {
      id: 1, title: "Inception", genre: "Action", year: 2010, rating: 9, isTrending: true
    },
     {
      id: 2, title: "PowerBook", genre: "Action", year: 2012, rating: 9, isTrending: true
    },
     {
      id: 3, title: "Titanic", genre: "Romance", year: 1997, rating: 8, isTrending: false
    },
     {
      id: 4, title: "Matrix", genre: "Action", year: 1999, rating: 9, isTrending: true
    },
     {
      id: 5, title: "Joker", genre: "Drama", year: 2019, rating: 8.5, isTrending: false
    }
  ];

  const filteredMovies = movies
  .filter(movie => movie.genre === "Action")
  .sort((a, b) => b.year - a.year); // bonus tri

  return(
    <div>
      <h1>Cinéma Explorer</h1>

      {
        filteredMovies.length === 0 ? (
          <p>Aucun film trouvé</p>
        ) : (
          filteredMovies.map(movie => (
            <div key={movie.id}
            style={{ border: "1px solid white", margin: "10px", padding: "10px"}}>
              <h2>{movie.title}</h2>
              <p>Genre: {movie.genre}</p>
              <p>Année: {movie.year}</p>
              <p>Note: {movie.rating}</p>

              {movie.isTrending && <span> Trending </span> }
              {movie.rating > 8 && <span>Top Rated </span>}
              {movie.year < 2000 && <span>Classic </span>}

            </div>
          ))
        )
      }
    </div>
  );
}

export default App;

// import UserList from "./Composant/UserList";


// const allEmployees = [
//   {
//     id: 105,
//     name: "Fomubad Borista",
//     email: "FomubadBorista@gmail.com",
//     role: "Admin",
//     active: true,
//     dept: "Engineering",
//     salary: 75000,
//   },
//   {
//     id: 102,
//     name: "Ebouele Benjamin",
//     email: "EboueleBenjamin@gmail.com",
//     role: "user",
//     active: false,
//     dept: "Marketing",
//     salary: 50000,
//   },
//   {
//     id: 103,
//     name: "Tsamo Rooswell",
//     email: "RooswellTsamo@gmail.com",
//     role: "user",
//     active: true,
//     dept: "Sales",
//     salary: 60000,
//   },
//   {
//     id: 104,
//     name: "Ryan Brown",
//     email: "RyanBrown@gmail.com",
//     role: "user",
//     active: false,
//     dept: "HR",
//     salary: 55000
//   },
//   {
//     id: 5,
//     name: "Sokeng Michelle",
//     email: "SokengMichelle@gmail.com",
//     role: "user",
//     active: true,
//     avatar: "https://randomuser.me/api/portraits/women/49.jpg"
//   },
// ];

// function EmployeeDashboard() {
//   const topEmployees = allEmployees.filter(
//    (emp) => emp.dept === emp.salary > 60000);
//    return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif"}}>
//       <h1>Top Engineering Employees</h1>
//       {topEmployees.length > 0 ? (
//         <ul>
//           {topEmployees.map((emp)=>(
//             <li key={emp.id}
//             style={{marginBottom: "10px"}}>
//               <strong>{emp.name}</strong>-{emp.email} -${emp.salary}
//             </li>
//           ))}
//         </ul>
//       ):(
//         <p>No top engineering employees found.</p>
//       )}
//       </div>
//       );
//     }
    

// function App() {
//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <UserList />
//     </div>
//   );
// }

// export default App;
   // </div>
 // )
// const Task = ({name, isCompleted}) => {
//   return (
//     <div>
//       <input type="checkbox" checked={isCompleted} readOnly style={{ marginRight: "10px"}} />
//       <span style={{ textDecoration: isCompleted ? "line-through" : "none"}}>
//         {name}
//       </span>
//       <p>{isCompleted ? "Completed" : "Not completed: "}{name}</p>
//       {isCompleted && (<span style={{ color: "green" }}>(Verified)</span>)}
//     </div>
//   );
// };
// function App() {
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif"}}>
//       <h1>Task List</h1>
//       <Task name="Complete React" isCompleted={true} />
//       <Task name="Review pull request" isCompleted={false} />
//       <Task name="Update documentation" isCompleted={true} />
//     </div>
//   );
// }

//export default App;


// function App() {
//   const techstack = ["React", "Node.js", "Express", "MongoDB"];
 

// function App() {
//   const techstack = ["React", "Node.js", "Express", "MongoDB"];
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif"}}>
//       <h1>Localhost Academy Js Course</h1>
//       <p>Welcome to the Localhost Academy JavaScript course! In this course, we
//          will cover the fundamentals of JavaScript programming, including variables,
//            your skills, this course is designed to help you become proficient in JavaScript.</p>
//            <h2> Tech Stack</h2>
//       <ul>
//         {techstack.map((tech, index) => (
//           <li key={index}>{tech}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import CourseCard from "./Composant/CourseCard";
// import Header from "./Composant/Header";
// import SectionWrapper from "./Composant/SectionWrapper";
// import ProductCard from "./Composant/ProductCard";



//  function App() {
  
//   return (
//     <>
//     <SectionWrapper title="User profile" theme="light">
//       <ProductCard
//         name="Wireless Headphones"
//         price={199.99}
//         description="Experience the freedom of wireless sound with our top-of-the-line headphones. Featuring advanced noise-cancellation technology, crystal-clear audio, and a comfortable fit, these headphones are perfect for music lovers and professionals alike. Whether you're commuting, working out, or just relaxing at home, enjoy your favorite tunes without any distractions."
//         image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//         title="Noise-Cancelling Wireless Headphones"
//         category="Electronics"
//         isDiscounted={true}
//       />
//       <ProductCard
//         name="Smart Watch"
//         price={299.99}
//         description="Stay connected and track your fitness with our latest smart watch. Featuring a sleek design, long battery life, and a wide range of health and fitness tracking features."
//         image="https://images.unsplash.com/photo-1523275335684-37898b6761c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQld2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
//         title="Fitness Tracker Smart Watch"
//         category="Electronics"
//         isDiscounted={false}
//       />
//     </SectionWrapper>
//     </>
//   );
// }

// export default App;
  // Rule 1: one Root Element
  //Action: Wrap the content  in a single root element (e.g., a div),
  //try to return two divs without wrapping them in a parent div, and see the error message in the console.
  /*return (
    <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif"}}>
      <h1> instructor dashboard</h1>
      <UserCard
        name="Fomubad Borista"
        email="FomubadBorista@gmail.com"
        role="instructor"
        status="Active"
        avatar="https://randomuser.me/api/portraits/men/44.jpg"   
      />
      <UserCard
        name="Ebouele Benjamin"
        email="EboueleBenjamin@gmail.com"
        role="Instructor"
        status="Active"
        avatar="https://randomuser.me/api/portraits/men/43.jpg"
      />
      <UserCard
        name="Tsamo Rooswell"
        email="RooswellTsamo@gmail.com"
        role="instructor"
        status="Active"
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
      />
    </div>
    
   {/*<header>
      <h1>Welcome to {academyName}</h1>
      <p>This is a simple {sessionType} application.</p>
   </header>

   <main>
    <h2>Session Details</h2>
    <p>In this session, we will cover the basics of React, including components, JSX, and state management </p>
    <h1>Let's Test something</h1>
    <p>Logic Test: 2+2 is equal to {2 + 2}</p>
   </main>*/
   //</>
 // );
//} 

//export default App;
//    const courses = [
//     {
//       title: "javascript Basics",
//       instructor: "Ryan Brown",
//       duration : "3 weeks",
//       isEnrolled: true,
//       level:"Beginner", 
//    },
//        {
//       title: "Advanced javascript",
//       instructor: "Sokeng Michelle",
//       duration : "4 weeks",
//       isEnrolled: false,
//       level:"Avanced" ,
//        },
//        {
//       title: "Full-Stack Development",
//       instructor: "Tsamo Rooswell",
//       duration:  "6 weeks",
//       isEnrolled: true,
//       level:"Intermediate",
//        },
//        ];
//   return (
//     <div>
//       <Header/>
//       {courses.map((course, index) => (
//         <CourseCard key={index}  course={course} />
//       )
//       )}
//     </div>
//   );
// };

//export default App;
//     <>