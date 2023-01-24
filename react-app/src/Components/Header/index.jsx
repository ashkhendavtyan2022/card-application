import React from "react";
import "./styles.css";

export const Header = ({addCard}) => {

    return (
        <div className="header">
            <button type="button" onClick={() => addCard}>add card</button>
            <button type="button">sort cards</button>
        </div>
    )
}