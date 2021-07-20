import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import logoImg from "../../images/w1.jpg";
const { navLinks, logo } = styles;
const Nav = () => {
    return (
        <nav>
            <div className={logo}>
                <img src={logoImg} alt="logoimg" />
                <h2>React Router Dom</h2>
            </div>
            <ul>
                <Link className={navLinks} to="/">
                    <li>Home</li>
                </Link>
                <Link className={navLinks} to={`imagebox`}>
                    <li>Image-Box</li>
                </Link>
                <Link className={navLinks} to="/cats">
                    <li>Cats</li>
                </Link>
                <Link className={navLinks} to="/rubik">
                    <li>Rubik</li>
                </Link>
                <Link className={navLinks} to="/digits">
                    <li>Digits</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
