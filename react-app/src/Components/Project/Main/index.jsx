import React from "react";
import { useGlobalContext } from "../../../Context/Context";
import { Card } from "../../Card";
import "./styles.css";

export const Main = () => {
    const { cards } = useGlobalContext();

    return(
        <div className="main">
            <div className="main-wrapper">
                {cards.map((card, index) => (
                    <Card
                    key = {index}
                    card = {card}
                    />
                ))}
            </div>
            
        </div>
    );
};