import { useState } from "react";
import styles from "./ImageFetch.module.scss";
const ImageFetch = () => {
  const [cats, setCats] = useState([]);
  // const [newCat, setNewCat] = useState(false);

  // const apiKey = "7d7c1821-4ae6-4c42-9247-443e9bad1402";
  const url = `https://api.thecatapi.com/v1/images/search`;

  const fetchCats = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) throw Error("not fetched in fetchCats");

      const data = await response.json();

      setCats(data);
      // setNewCat(false);

      return data;
    } catch (err) {
      console.log(err, "cannot fetch data");
    }
  };

  const catHandler = () => {
    // setNewCat(true);
    fetchCats();
  };
  return (
    <>
      <button onClick={catHandler}>Fetch Cat</button>
      <div className={styles.catHolder}>
        {cats.map((cat) => (
          <img key={cat.id} src={cat.url} alt="" />
        ))}
      </div>
    </>
  );
};

export default ImageFetch;
