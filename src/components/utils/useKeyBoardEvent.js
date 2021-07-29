import { useEffect } from "react";

export const useKeyboardEvent = (key, callback) => {
    useEffect(() => {
        const handleKeyPress = e => {
            if (e.keyCode === key) {
                callback();
            }
        };

        if (document) {
            document.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    });
};
