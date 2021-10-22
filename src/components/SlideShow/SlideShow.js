import React, { useEffect, useState } from "react";
import styles from "./SlideShow.module.scss";
import classNames from "classnames";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import beetle1 from "../../images/IMG_1_600.jpg";
import beetle2 from "../../images/IMG_2_600.jpg";
import beetle3 from "../../images/IMG_3_600.jpg";
import beetle4 from "../../images/IMG_4_600.jpg";
import beetle5 from "../../images/IMG_5_600.jpg";
import beetle6 from "../../images/IMG_6_600.jpg";
import beetle7 from "../../images/IMG_7_600.jpg";
import beetle8 from "../../images/IMG_8_600.jpg";
import beetle9 from "../../images/IMG_9_600.jpg";
import beetle10 from "../../images/IMG_10_600.jpg";
import beetle11 from "../../images/IMG_11_600.jpg";
import beetle12 from "../../images/IMG_12_600.jpg";
import beetle13 from "../../images/IMG_13_600.jpg";
import beetle14 from "../../images/IMG_14_600.jpg";
import beetle15 from "../../images/IMG_15_600.jpg";
import beetle16 from "../../images/IMG_16_600.jpg";

const beetles = [
	beetle1,
	beetle2,
	beetle3,
	beetle4,
	beetle5,
	beetle6,
	beetle7,
	beetle8,
	beetle9,
	beetle10,
	beetle11,
	beetle12,
	beetle13,
	beetle14,
	beetle15,
	beetle16,
];

const SlideShow = () => {
	const [current, setCurrent] = useState(0);
	const length = beetles.length;

	if (length <= 0) return;

	const classes = index =>
		classNames(styles["container__image"], {
			[styles["container__animated_image"]]: index === current,
		});

	const slideToPrevious = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	const slideToNext = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	return (
		<div className={styles.container}>
			{beetles.map(
				(bee, i) =>
					i === current && (
						<img
							key={i}
							className={classes(i)}
							src={bee}
							alt='cars'
						/>
					)
			)}
			<FaChevronLeft
				className={styles.prevIcon}
				onClick={slideToPrevious}
			/>
			<FaChevronRight className={styles.nextIcon} onClick={slideToNext} />
		</div>
	);
};

export default SlideShow;
