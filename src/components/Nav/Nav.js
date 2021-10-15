import styles from './Nav.module.scss';
import logoImg from '../../images/w1.jpg';
import NavLinks from './NavLinks';
import { LinkContext } from './links-provider';
import { useContext } from 'react';

const { logo } = styles;

const Nav = () => {
	const links = useContext(LinkContext);

	const visibleLinks = links.filter(link => link.id !== links.length);

	return (
		<nav>
			<div className={logo}>
				<img src={logoImg} alt='logoimg' />
				<h2>React Router Dom</h2>
			</div>
			<ul>
				{visibleLinks.map(t => (
					<NavLinks key={t.id} linkTo={t.path} title={t.text} />
				))}
			</ul>
		</nav>
	);
};

export default Nav;
