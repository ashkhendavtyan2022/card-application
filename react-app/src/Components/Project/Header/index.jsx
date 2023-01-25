import React from "react";
import { useGlobalContext } from "../../../Context/Context";
import "./styles.css";

export const Header = () => {
    const { addNewCard, sortCards } = useGlobalContext();

    return (
        <header>
            <button type="button" onClick={addNewCard}>add card</button>
            <button type="button" onClick={sortCards}>sort cards</button>
        </header>
    );
};