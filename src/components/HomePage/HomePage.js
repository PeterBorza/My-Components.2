// import { useState } from 'react';
import styles from "./HomePage.module.scss";
import { ButtonContext } from "../../context/ButtonContext";
import { useContext } from "react";
import Button from "../Button/Button";

const { landScapes, buttonWrapper } = styles;

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
