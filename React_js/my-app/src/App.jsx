import CourseCard from "./Composant/CourseCard";
import Header from "./Composant/Header";




 function App() {
  
   const courses = [
    {
      title: "javascript Basics",
      instructor: "Ryan Brown",
      duration : "3 weeks",
      isEnrolled: true,
      level:"Beginner", 
   },
       {
      title: "Advanced javascript",
      instructor: "Sokeng Michelle",
      duration : "4 weeks",
      isEnrolled: false,
      level:"Avanced" ,
       },
       {
      title: "Full-Stack Development",
      instructor: "Tsamo Rooswell",
      duration:  "6 weeks",
      isEnrolled: true,
      level:"Intermediate",
       },
       ];
  return (
    <div>
      <Header/>
      {courses.map((course, index) => (
        <CourseCard key={index}  course={course} />
      )
      )}
    </div>
  );
};

export default App;

// import NavBar from "./Composant/NavBar";
// import UserCard from "./Composant/UserCard";


// function App() {
//   return (
//     <div className="app">
//       {/* Barre de navigation */}
     
//       <NavBar />

//       <main className="main-content">
//         <div className="page-header">
//           <h1 className="page-title">Instructor Dashboard</h1>
//           <p className="page-subtitle">Gestion de l'équipe pédagogique</p>
//         </div>

//         {/* Grille de cartes — UserCard utilisé plusieurs fois (architecture réutilisable) */}
//         <div className="cards-grid ">
          
//           <UserCard
//             name="Tsamo Rooswell"
//             role="Instructeur Principal"
//             status="Active"
//             startYear={2019}
            
//           />
//           <UserCard
//             name="Lucas Hernandes"
//             role="Instructeur Full-Stack"
//             status="Active"                                                                  
//             startYear={2021}
//           />
//           <UserCard
//             name="Alfred Benali"
//             role="Instructeur UX/UI"
//             status="Inactive"
//             startYear={2020}
//           />
//           <UserCard
//             name="Gui Leroy"
//             role="Instructeur DevOps"
//             status="Active"
//             startYear={2018}
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

 //function App() {
 
 //const _academyName = "LocalHost Academy";
 // const _sessionType = "React Foundations";

  // Rule 1: one Root Element
  //Action: Wrap the content  in a single root element (e.g., a div),
  //try to return two divs without wrapping them in a parent div, and see the error message in the console.
  //return (
    <>
   {/* <div>
      <h1> instructor dashboard</h1>
      <UserCard/>
      
    </div>
    {/*
   <header>
      <h1>Welcome to {academyName}</h1>
      <p>This is a simple {sessionType} application.</p>
   </header>

   <main>
    <h2>Session Details</h2>
    <p>In this session, we will cover the basics of React, including components, JSX, and state management </p>
    <h1>Let's Test something</h1>
    <p>Logic Test: 2+2 is equal to {2 + 2}</p>
   </main>*/}
   </>
  //) ;
//} 

export default App;
