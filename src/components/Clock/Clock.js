import React, { useEffect } from 'react';
import styles from './Clock.module.scss';

const Clock = () => {
	const now = new Date();
	const secs = now.getSeconds();
	const secondManusHandler = () => {
		const h = now.getHours();
		const mins = now.getMinutes();
		// secondManus.style.transform = rotZ(`${secs * 6}`);
		// minuteManus.style.transform = rotZ(`${mins * 6}`);
		// hourManus.style.transform = rotZ(`${h * 30}`);
	};
	// setInterval(secondManusHandler, 1000);

	// useEffect(() => {

	// },[h, mins, secs]);
	return (
		<div className={styles.clock}>
			<div
				className={styles.second_manus}
				style={{ transform: `rotateZ(${secs * 6}deg)` }}
			></div>
			<div className={styles.minute_manus}></div>
			<div className={styles.hour_manus}></div>
			<div className={styles.middle}></div>
		</div>
	);
};

export default Clock;
