import React from "react";

import { loader_bg, loader_dots, dot } from "./Loader.module.scss";

const Loader = () => {
    const loadingDotCount = [0, 1, 2];

    return (
        <div className={loader_bg}>
            <div className={loader_dots}>
                {loadingDotCount.map((_, idx) => (
                    <div
                        key={idx}
                        className={dot}
                        style={{ animationDelay: `${idx * 130}ms` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Loader;
