import { createContext } from "react";

import ls1 from "../images/ls1.jpg";
import ls2 from "../images/ls2.jpg";
import ls3 from "../images/ls3.jpg";
import ls4 from "../images/ls4.jpg";
import ls5 from "../images/ls5.jpg";
import ls6 from "../images/ls6.jpg";
import ls7 from "../images/ls7.jpg";
import ls8 from "../images/ls8.jpg";
import ls9 from "../images/ls9.jpg";
import ls10 from "../images/ls10.jpg";

export const ImageContext = createContext(null);

export const ImageContextProvider = ({ children }) => {
    const pics = [ls1, ls2, ls3, ls4, ls5, ls6, ls7, ls8, ls9, ls10];

    return (
        <ImageContext.Provider value={pics}>{children}</ImageContext.Provider>
    );
};
