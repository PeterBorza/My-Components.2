import styles from "./ImageDetail.module.scss";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { useContext } from "react";

const ImageDetail = () => {
  const { id } = useParams();
  const { pics } = useContext(MyContext);
  return (
    <div className={styles.imagePage}>
      <Link className={styles.navLinks} to="/imagebox">
        <img src={pics[id]} alt="landscape" />
      </Link>
    </div>
  );
};

export default ImageDetail;
