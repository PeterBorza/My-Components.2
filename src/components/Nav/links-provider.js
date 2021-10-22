import { createContext } from "react";

import ImageBox from "../ImageBox/ImageBox";
import HomePage from "../HomePage/HomePage";
import Cats from "../Cats/Cats";
import ImageDetail from "../ImageDetail/ImageDetail";
import SlideShow from "../SlideShow/SlideShow";

export const LinkContext = createContext(null);

export const LinkProvider = ({ children }) => {
	const links = [
		{
			text: "Home",
			path: "/",
			exact: true,
			component: HomePage,
			id: 1,
		},
		{
			text: "Image-Box",
			path: "/imagebox",
			exact: true,
			component: ImageBox,
			id: 2,
		},
		{
			text: "Cats",
			path: "/cats",
			exact: false,
			component: Cats,
			id: 3,
		},
		{
			text: "SlideShow",
			path: "/slideshow",
			exact: false,
			component: SlideShow,
			id: 4,
		},
		{
			text: null,
			path: "/imagebox/:id",
			exact: false,
			component: ImageDetail,
			id: 5,
		},
	];
	return (
		<LinkContext.Provider value={links}>{children}</LinkContext.Provider>
	);
};
