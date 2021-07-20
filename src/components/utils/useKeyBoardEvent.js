import { useEffect } from "react";

export default function useKeyboardEvent(key, callback) {
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
}
