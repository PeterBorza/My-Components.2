import React from "react";

import { Sides } from "../index";

import styles from "./Rubik.module.scss";

// const rZ = angle => `rotateZ(${angle}deg)`;
const rX = angle => `rotateX(${angle}deg)`;
const rY = angle => `rotateY(${angle}deg)`;

const rubikData = {
    sidesBackgroundColor: [
        "3E4E50",
        "FACFAD",
        "F8BD7F",
        "F5AC72",
        "F2AA7E",
        "D8D4F2",
        "C4B2BC",
        "A29587",
        "846C5B",
    ],
    front: "150px",
    percent: "100%",
    degrees: "90",
    transforms: (front, percent, degrees) => [
        `translateZ(-${front})`,
        `translateX(${percent}) ${rY(degrees * 3)} translateZ(${front})`,
        `translateX(-${percent}) ${rY(degrees)} translateZ(${front})`,
        `${rX(degrees)} translateZ(${front})`,
        ` ${rX(degrees * 3)} translateZ(${front})`,
        ` translateZ(${front})`,
    ],
};

const Rubik = () => {
    const { sidesBackgroundColor, front, percent, degrees, transforms } =
        rubikData;
    const sidesTransformed = transforms(front, percent, degrees);
    return (
        <div className={styles.landScapes}>
            <div className={styles.container}>
                <div className={styles.flipper}>
                    {sidesTransformed.map((item, i) => (
                        <div
                            key={i}
                            className={styles.box}
                            style={{ transform: item }}
                        >
                            <Sides colors={sidesBackgroundColor} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rubik;
