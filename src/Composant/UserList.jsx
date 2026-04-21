const Users = [
  {
    id: 1,
    name: "Fomubad Borista",
    email: "FomubadBorista@gmail.com",
    role: "Admin",
    active: true,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 2,
    name: "Ebouele Benjamin",
    email: "EboueleBenjamin@gmail.com",
    role: "user",
    active: false,
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 3,
    name: "Tsamo Rooswell",
    email: "RooswellTsamo@gmail.com",
    role: "user",
    active: true,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 4,
    name: "Ryan Brown",
    email: "RyanBrown@gmail.com",
    role: "user",
    active: false,
    avatar: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    id: 5,
    name: "Sokeng Michelle",
    email: "SokengMichelle@gmail.com",
    role: "user",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/49.jpg"
  },
];

function UserList() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif"}}>
      <h1>User List</h1>
      {Users.map((user) => (
        <div key={user.id} 
        style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "300px",
               margin: " 20px auto",
        
        }}>
          
          <img 
          src={user.avatar} 
          alt={`${user.name}'s avatar`}
           style={{ borderRadius: "50%", width: "60px", height: "60px"}} />
          
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>

            {/* conditional rendering  */}
           <span
            className={user.active ? "bg-green-500" : "bg-red-500"}
            style={{ color: "white", padding: "5px 10px", borderRadius: "5px" }}
           >
            {user.active ? "Active" : "Inactive"}
           </span>
           {user.active ? <p><button>Message</button></p> : 
           <p>Offline</p>}
          </div>    
          ))}
        </div>
   );
}

export default UserList;