import { useContext } from "react";

import { Link } from "react-router-dom";
import { ImageContext } from "../../context";

import { landScapes } from "./ImageBox.module.scss";

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
    return <div className={landScapes}>{renderPics}</div>;
};

export default ImageBox;
