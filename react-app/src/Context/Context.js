import React, { createContext, useContext, useEffect, useState } from "react";
import { fromLocal, saveToLocal } from "../Helpers";

const CardContext = createContext();

const AppProvider = ({children}) => {
    const [cards, setCards] = useState(fromLocal());

    useEffect(() => {
        saveToLocal(cards);
    }, [cards]);

    const addNewCard = () => {
        const newNum = Math.floor(Math.random() * 1000);

        if(cards.includes(newNum)) {
            addNewCard();
        } else {
            setCards((prev) => [...prev, newNum]);
        }
    };

    const sortCards = () => {
        setCards((prev) => {
            return [...prev].sort((a, b) => a - b);
        });
    };

    const removeCard = (num) => {
        setCards((prev) => {
            return [...prev].filter((item) => item !== num);
        });
    };

    return (
        <CardContext.Provider 
        value = {{
            cards, 
            addNewCard,
            sortCards,
            removeCard,
        }}>
            {children}
        </CardContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(CardContext)
};

export { AppProvider, useGlobalContext };






