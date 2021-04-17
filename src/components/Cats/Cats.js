import styles from "./Cats.module.scss";
import ImageFetch from "../ImageFetch/ImageFetch";

const Cats = () => {
  return (
    <div className={styles.landScapes}>
      <ImageFetch />
    </div>
  );
};

export default Cats;
