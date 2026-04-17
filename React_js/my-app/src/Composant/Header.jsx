//Author : Tsamo Tchinda Rooswell
const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <h1>E-Learning DashBoard</h1>
    </header>
  );
};

export default Header;
/*
1- pourquoi les props rendent les composants dynamiques ?
Les props permettent de passer des donnees d'un composant parent a un composant enfant.
grace aux props, un meme composant peut afficher des informations differentes sans changer son code.
par exemple, CourseCard peut afficher plusieurs cours differents juste en changeant les vsleurs du props.

2- quelle est la difference entre props et state ?
les props:
-sont envoyes par le composant parent
-sont en lecture seule (on ne peut pas les modifier)

le state :
- Est gere a l'interieur du composant 
-peut changer au cours du temps (interactions utilisateur, evenements etc...)  
donc  props pour les donnees externe et state pour les donnees internes

3- pourquoi utiliser le destructuring dans le react ?
le destructuring permet d'extraire directement les valeurs des props.  cela rend le code plus simple, plus lisible et evite
d'ecrire props.title, props.instructor .
*/
