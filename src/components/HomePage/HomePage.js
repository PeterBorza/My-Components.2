// import { useState } from 'react';
import { useContext } from "react";

import { ButtonContext } from "../../context";
import { Button } from "../index";

import { landScapes, buttonWrapper } from "./HomePage.module.scss";

const HomePage = () => {
    const [buttons, counter] = useContext(ButtonContext);

    return (
        <div className={landScapes}>
            <div className={buttonWrapper}>
                {buttons.map(({ id, content, handler }) => (
                    <Button key={id} handler={handler}>
                        {content}
                    </Button>
                ))}
                <span>{counter}</span>
            </div>
        </div>
    );
};

export default HomePage;
