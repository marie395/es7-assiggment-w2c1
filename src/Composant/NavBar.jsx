const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="navbar-logo">L.A</span>
                <span className="navbar-title">LocalHost Academy</span>
            </div>
            <ul className="navbar-links">
                <li><a href="#" className="nav-link active">Home</a></li>
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Dashboard</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;


// NavBar.jsx — Barre de navigation principale de l'application

/*
 * ANALYSE CRITIQUE
 *
 * 1. Pourquoi utilise-t-on des composants en React ?
 *    Les composants permettent de découper l'interface en blocs indépendants
 *    et réutilisables. Chaque composant gère sa propre logique et son affichage,
 *    ce qui rend le code plus lisible, plus maintenable et plus facile à tester.
 *    On évite ainsi la répétition (DRY : Don't Repeat Yourself).
 *
 * 2. Quelle est la différence entre HTML et JSX ?
 *    Le JSX est une extension de syntaxe JavaScript qui ressemble à du HTML,
 *    mais qui est en réalité transformé en appels React.createElement().
 *    Contrairement au HTML, le JSX permet d'insérer des expressions JavaScript
 *    directement dans le balisage (via {}), utilise className au lieu de class,
 *    et exige que chaque composant retourne un seul élément racine.
 *
 * 3. Pourquoi séparer une application en plusieurs fichiers ?
 *    La séparation en fichiers respecte le principe de responsabilité unique :
 *    chaque fichier a un rôle précis. Cela facilite la collaboration en équipe,
 *    améliore la lisibilité, simplifie les tests unitaires, et permet de
 *    retrouver rapidement un composant sans chercher dans un fichier géant.
 */