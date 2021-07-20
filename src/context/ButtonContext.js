import { createContext, useState } from "react";

export const ButtonContext = createContext(null);

export const ButtonData = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const buttons = [
        {
            id: 1,
            content: "Minus",
            handler: () => {
                setCounter(prev => prev - 1);
            },
        },
        {
            id: 2,
            content: "Plus",
            handler: () => {
                setCounter(prev => prev + 1);
            },
        },
        {
            id: 3,
            content: "Reset",
            handler: () => {
                setCounter(0);
            },
        },
    ];

    return (
        <ButtonContext.Provider value={[buttons, counter]}>
            {children}
        </ButtonContext.Provider>
    );
};
