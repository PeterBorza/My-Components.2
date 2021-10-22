import { createContext } from "react";

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

export const SlideContext = createContext(null);

export const SlideContextProvider = ({ children }) => {
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
	return (
		<SlideContext.Provider value={beetles}>
			{children}
		</SlideContext.Provider>
	);
};
