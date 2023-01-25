import React from "react";
import { useGlobalContext } from "../../Context/Context";
import "./style.css";

export const Card = ({ card }) => {
    const { removeCard } = useGlobalContext();

    return (
        <div className="card">
            <button className="remove-btn" onClick={() => removeCard(card)}>
                X
            </button>
            <p>{card}</p>
        </div>
    );
};