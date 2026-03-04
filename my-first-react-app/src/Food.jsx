function Food() {
    const food1 = "Pizza";
    const food2 = "Sushi";
    const food3 = "Tacos";

    return (
        <div>
            <h2>Favorite Foods</h2>
            <ul>
                <li>Banana</li>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food3}</li>
                <li>Mango</li>
            </ul>
        </div>
    );
}

export default Food;