const Hello = ({ greeting }) => {
    return (
        <div>
            <h1 className="tc">Hello there!</h1>
            <p>Welcome to Mobile App Dev</p>
            <p>{greeting}</p>
        </div>
    );
};

export default Hello;