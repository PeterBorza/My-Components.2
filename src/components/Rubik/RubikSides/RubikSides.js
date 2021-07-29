import React from "react";

import { rubik_color } from "./RubikSides.module.scss";

const RubikSides = ({ colors }) => {
    return (
        <>
            {colors.map((item, i) => (
                <div
                    key={i}
                    className={rubik_color}
                    style={{ backgroundColor: `${item}` }}
                >
                    {i + 1}
                </div>
            ))}
        </>
    );
};

export default RubikSides;
