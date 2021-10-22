import React, { useContext, useState } from "react";
import styles from "./SlideShow.module.scss";
import classNames from "classnames";
import { SlideContext, SlideContextProvider } from "./slideContext";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SlideShow = () => {
	const beetles = useContext(SlideContext);
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

const SlideContainer = () => {
	return (
		<>
			<SlideContextProvider>
				<SlideShow />
			</SlideContextProvider>
		</>
	);
};

export default SlideContainer;
