import styles from "./ImageDetail.module.scss";
import { useParams, Link } from "react-router-dom";
import { ImageContext } from "../../context/ImageContext";
import { useContext } from "react";

const ImageDetail = () => {
    const { id } = useParams();
    const pics = useContext(ImageContext);
    return (
        <div className={styles.imagePage}>
            <Link className={styles.navLinks} to="/imagebox">
                <img src={pics[id]} alt="landscape" />
            </Link>
        </div>
    );
};

export default ImageDetail;
