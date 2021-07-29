import { useState } from "react";

const useFetch = url => {
    const [imageData, setImageData] = useState([]);
    const [newImage, setNewImage] = useState(false);

    // const apiKey = "7d7c1821-4ae6-4c42-9247-443e9bad1402";

    const fetchImage = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) throw Error("not fetched from web");

            const data = await response.json();

            setImageData(data);
            setNewImage(false);
        } catch (err) {
            console.log(err, "cannot fetch data");
        }
    };

    const imageHandler = () => {
        setNewImage(true);
        fetchImage();
    };
    return { imageData, newImage };
};

export default useFetch;
