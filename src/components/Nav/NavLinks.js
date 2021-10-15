import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './Nav.module.scss';

const NavLinks = ({ linkTo, title }) => {
	return (
		<li>
			<Link className={navLinks} to={linkTo}>
				{title}
			</Link>
		</li>
	);
};

export default NavLinks;
