const Usercard = ({name, email, role, status, avatar, isAdmin}) => {
    return (
        <>
        <div className="usercard">
            <img src={avatar} alt={name} />
            <h2>
                {name} {isAdmin ? "  " : ""}
            </h2>
        
        <p className="role">{role}</p>
        <p><small className="email">{email}</small></p>
       <span className={`status ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
            {status}
        </span>
        </div>
        </>
    );

};
export default Usercard;










/*const UserCard = ({ name, role, status, startYear }) => {
  // BONUS : Calcul des années d'expérience à partir de startYear
  const currentYear = new Date().getFullYear();
  const experience = startYear ? currentYear - startYear : null;

  // Condition d'affichage du statut : Active ou Inactive
  const isActive = status === "Active";

return (
    // BONUS : Utilisation d'un Fragment <> </> pour éviter une div inutile
    <>
      <div className={`user-card ${isActive ? "card-active" : "card-inactive"}`}  style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "300px",
            margin: "20px auto",
        }}>
        {/* Indicateur de statut coloré — BONUS : couleur selon le statut */
       // <div className={`status-badge ${isActive ? "badge-active" : "badge-inactive"}`}>
         // <span className="status-dot"></span>
          //{/* Affichage conditionnel du statut */}
          //{isActive ? "Active" : "Inactive"}
        //</div>

        {/* Avatar généré depuis le nom */}
        //<div className="card-avatar">
          //{name.charAt(0).toUpperCase()}
        //</div>

        //{/* Affichage du nom en MAJUSCULE via .toUpperCase() */}
        //<h2 className="card-name">{name.toUpperCase()}</h2>

        //{/* Affichage du rôle */}
        //<p className="card-role">{role}</p>

        /* BONUS : Affichage des années d'expérience */
        //{experience !== null && (
          //<p className="card-experience">
            //{experience} an{experience > 1 ? "s" : ""} d'expérience
          //</p>
        //)}
      //</div>
    //</>
  //);
//};

 /*const UserCard = () => {
      const user = {
        name: "Tsamo Rooswell",
        email: "RooswellTsamo@gmail.com",
        role: "Etudiant",
        status: "Active",
        avatar: "https://randomuser.me/api/potraits/men/75.jpg"
      };

      return (
        <>
        <div
        style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "300px",
            margin: "20px auto",
        }}>
            <img 
            src={user.avatar}
             alt= {`${user.name}'s avatar`}
             style={{ borderRadius: "50px" , width: "100px", height:"100px"}}
                 />
                 <h2>{user.name}</h2>
                 <p>Email: {user.email}</p>
                 <p>Role: {user.role}</p>
                 <span
                 className={user.statut === "Active" ? "bg-green-500" : "bg-red-500"}
                 style={{color: "white" , padding: "5px 10px", borderRadius: "5px"
                 }}
                >
                    {user.status}

                 </span>
        </div>
        </>
      );
}; 

export default UserCard;*/