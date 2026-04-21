// Ajout de isDiscounted dans les props
const ProductCard = ({ name, price, description, image, title, category, isDiscounted }) => {
    
    return (
        <div className="product-card">
            {/* Correction du alt : pas de guillemets autour de name */}
            <img src={image} alt={name} className="product-image" />
            
            <h2 className="product-name">{name}</h2>
            <h2 className="product-title">{title}</h2>
            
            {/* Correction de la className et du prix */}
            <p className={`product-price ${isDiscounted ? "discounted" : ""}`}>
                {price.toFixed(2)}€
            </p>
            
            <p className="product-description">{description}</p>
            <p className="product-category">{category}</p>
        </div>
    );
};
export default ProductCard;