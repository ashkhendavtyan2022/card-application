export const fromLocal = () => {
    return JSON.parse(localStorage.getItem("cards")) || [];
};

export const saveToLocal= (cards) => {
    localStorage.setItem("cards", JSON.stringify(cards));
};