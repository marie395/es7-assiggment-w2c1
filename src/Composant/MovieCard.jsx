//Author: Tsamo Tchinda Rooswell
const  MovieCard = ({ movie }) => {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px"}}>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Année: {movie.year}</p>
            <p>Note: {movie.rating}</p>

            {movie.isTrending && <span>Trending</span>}
            {movie.rating > 8 && <span> t\Top Rated</span>}
            {movie.year < 2000 && <span> Classic</span>}

        </div>
    );
};

export default MovieCard;

/*
1- pourquoi utiliser map()
map() permet de parcourir un tableau et generer automatiquement du jsx
 cela evite de repeter le meme code plusieurs fois.

 2- pourquoi key est importante ?
 la key permet a React d'identifier chaque element.
 cela ameliore les performances et evite des bugs lors des mises a jour.

 3- pourquoi filtrer les donnees ?
 filter() permet d'afficher seulement les donnees utiles.
 cela rend l'application plus claire et plus perfomante.
 */
