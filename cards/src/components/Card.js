import React from "react";

const img = "https://picsum.photos/200/300";
const desc = "Card description";
const Card = () => {
    return (
        <article>
            <header>Questa è una card</header>
            <img src={img} alt={desc}/>
            <footer>2$</footer>
        </article>
    );
};

export default Card;
