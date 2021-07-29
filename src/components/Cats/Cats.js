import styles from "./Cats.module.scss";
import { ImageFetch } from "../index";

const Cats = () => {
    return (
        <div className={styles.landScapes}>
            <ImageFetch />
        </div>
    );
};

export default Cats;
