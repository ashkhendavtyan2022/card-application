import React from "react";
import { useState } from "react";
import { Header } from "../Header";
import "./styles.css";

export const Main = () => {
    const [cards, setCards] = useState([]);

    const AddCard = () => {
        const card = []
        setCards(...cards, card)
    }

    console.log(cards)

    const value = Math.floor(Math.random() * 1000)

    return(
        <div className="main">
            <Header addCard = {AddCard} />
            {cards.map((card, index) => {
                return (
                    <div>{value}</div>
                )
            })}
        </div>
    )
}