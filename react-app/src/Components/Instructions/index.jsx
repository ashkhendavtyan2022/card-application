import React from "react";
import "./styles.css";

export const Instructions = () => {

    return (
        <div className="instructions">
            <p>Press the "add card" button to add the new Card.</p>

            <p>Use the "sort cards" button to sort the Cards by the increase.</p>
            
            <p>Press an X icon on the top right to delete them.</p>
        </div>
    );
};