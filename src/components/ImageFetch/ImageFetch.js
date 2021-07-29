import { useState } from "react";
import { Button, Loader } from "../index";

import styles from "./ImageFetch.module.scss";

const ImageFetch = () => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(false);

    // const apiKey = "7d7c1821-4ae6-4c42-9247-443e9bad1402";
    const url = `https://api.thecatapi.com/v1/images/search`;

    const fetchCats = async url => {
        setLoading(true);
        try {
            const response = await fetch(url);

            if (!response.ok) throw Error("not fetched in fetchCats");

            const data = await response.json();

            setCats(data);

            return data;
        } catch (err) {
            console.log(err, "cannot fetch data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.cat_container}>
            <Button handler={() => fetchCats(url)}>Click</Button>
            <div className={styles.catHolder}>
                {loading ? (
                    <Loader />
                ) : (
                    cats.map(cat => <img key={cat.id} src={cat.url} alt="" />)
                )}
            </div>
        </div>
    );
};

export default ImageFetch;
