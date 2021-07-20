import { createContext } from "react";

import ImageBox from "../components/ImageBox";
import HomePage from "../components/HomePage";
import Cats from "../components/Cats";
import ImageDetail from "../components/ImageDetail";
import Rubik from "../components/Rubik";
import Digits from "../components/Digits";

export const LinkContext = createContext(null);

export const LinkData = ({ children }) => {
    const links = [
        {
            path: "/",
            exact: true,
            component: HomePage,
            id: 1,
        },
        {
            path: "/imagebox",
            exact: true,
            component: ImageBox,
            id: 2,
        },
        {
            path: "/cats",
            exact: false,
            component: Cats,
            id: 3,
        },
        {
            path: "/rubik",
            exact: false,
            component: Rubik,
            id: 4,
        },
        {
            path: "/digits",
            exact: false,
            component: Digits,
            id: 5,
        },
        {
            path: "/imagebox/:id",
            exact: false,
            component: ImageDetail,
            id: 6,
        },
    ];
    return (
        <LinkContext.Provider value={links}>{children}</LinkContext.Provider>
    );
};
