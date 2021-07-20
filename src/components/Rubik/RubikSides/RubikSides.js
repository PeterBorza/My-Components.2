import React from "react";
import styles from "./RubikSides.module.scss";

const RubikSides = ({ colors }) => {
    return (
        <>
            {colors.map((item, i) => (
                <div
                    key={i}
                    className={styles.rubik_color}
                    style={{ backgroundColor: `${item}` }}
                >
                    {i + 1}
                </div>
            ))}
        </>
    );
};

export default RubikSides;
