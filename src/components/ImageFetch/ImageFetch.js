import { useState, useEffect } from "react";
import Button from "../Button/Button";
// import useFetch from "../useFetch/useFetch";
import styles from "./ImageFetch.module.scss";
const ImageFetch = () => {
    const [cats, setCats] = useState([]);

    // const apiKey = "7d7c1821-4ae6-4c42-9247-443e9bad1402";
    const url = `https://api.thecatapi.com/v1/images/search`;
    const fetchCats = async url => {
        try {
            const response = await fetch(url);

            if (!response.ok) throw Error("not fetched in fetchCats");

            const data = await response.json();

            setCats(data);

            return data;
        } catch (err) {
            console.log(err, "cannot fetch data");
        }
    };

    const catHandler = () => {
        fetchCats(url);
    };
    return (
        // <>
        //     <p>p</p>
        //     {loading ? <p>Loading...</p> : "data arrived"}
        //     {error && <p>{error.message}</p>}
        // </>
        <>
            <Button handler={catHandler}>Click</Button>
            <div className={styles.catHolder}>
                {cats.map(cat => (
                    <img key={cat.id} src={cat.url} alt="" />
                ))}
            </div>
        </>
    );
};

export default ImageFetch;
