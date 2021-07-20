import { ImageContext } from "../../context/ImageContext";
import { Link } from "react-router-dom";
import styles from "./ImageBox.module.scss";
import { useContext } from "react";

const renderLinks = arr =>
    arr.map((item, index) => (
        <div key={index}>
            <Link to={`/imagebox/${index}`}>
                <img src={item} alt={`pic ${index}`} />
            </Link>
        </div>
    ));

const ImageBox = () => {
    const pics = useContext(ImageContext);
    const renderPics = renderLinks(pics);
    return <div className={styles.landScapes}>{renderPics}</div>;
};

export default ImageBox;
