import { createContext } from "react";

import { ImageBox, Home, Cats, Details, Rubik, Digits } from "../components";

export const LinkContext = createContext(null);

export const LinkData = ({ children }) => {
    const links = [
        {
            path: "/",
            exact: true,
            component: Home,
            title: "Home",
            isNavLink: true,
            id: 1,
        },
        {
            path: "/imagebox",
            exact: true,
            component: ImageBox,
            title: "ImageBox",
            isNavLink: true,
            id: 2,
        },
        {
            path: "/cats",
            exact: false,
            component: Cats,
            title: "Cats",
            isNavLink: true,
            id: 3,
        },
        {
            path: "/rubik",
            exact: false,
            component: Rubik,
            title: "Rubik",
            isNavLink: true,
            id: 4,
        },
        {
            path: "/digits",
            exact: false,
            component: Digits,
            title: "Digits",
            isNavLink: true,
            id: 5,
        },
        {
            path: "/imagebox/:id",
            exact: false,
            component: Details,
            title: "",
            isNavLink: false,
            id: 6,
        },
    ];
    return (
        <LinkContext.Provider value={links}>{children}</LinkContext.Provider>
    );
};
