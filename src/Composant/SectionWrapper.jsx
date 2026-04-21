const SectionWrapper = ({ title,  children, theme }) => {
    const style = {
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#f9f9f9",
        color: theme === "dark" ? "#fff" : "#333",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
    };
    return (
        <section style={style}>
            <h2 style={{borderBottom: "2pt solid #E94560"}}>{title}</h2>
            {children}
        </section>
    );
};

export default SectionWrapper;