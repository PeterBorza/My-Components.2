import { Link } from 'react-router-dom';
import styles from './ImageBox.module.scss';
import { MyContext } from '../../MyContext';
import { useContext } from 'react';

const { landScapes } = styles;

const renderLink = (item, index) => (
	<div key={index}>
		<Link to={`/imagebox/${index}`}>
			<img src={item} alt={`pic ${index}`} />
		</Link>
	</div>
);

const renderLinks = arr => arr.map(renderLink);

const ImageBox = () => {
	const { pics } = useContext(MyContext);
	return <div className={landScapes}>{renderLinks(pics)}</div>;
};

export default ImageBox;
