import { Link } from "react-router-dom";

import logoImg from "../../images/w1.jpg";

import { navLinks, logo } from "./Nav.module.scss";

const Nav = ({ links }) => {
    return (
        <nav>
            <div className={logo}>
                <img src={logoImg} alt="logoimg" />
                <h2>React Router Dom</h2>
            </div>
            <ul>
                {links
                    .filter(link => link.isNavLink === true)
                    .map(link => (
                        <Link
                            className={navLinks}
                            key={`link-${link.title}`}
                            to={link.path}
                        >
                            <li>{link.title}</li>
                        </Link>
                    ))}
            </ul>
        </nav>
    );
};

export default Nav;
