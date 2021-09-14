import { Fragment, useState } from 'react';

import Button from '../Button/Button';

import styles from './ImageFetch.module.scss';

const url = `https://api.thecatapi.com/v1/images/search`;

const ImageFetch = () => {
	const [cats, setCats] = useState([]);

	// const apiKey = "7d7c1821-4ae6-4c42-9247-443e9bad1402";

	const fetchCats = async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('not fetched in fetchCats');
			const data = await response.json();
			setCats(data);
			return data;
		} catch (err) {
			console.log(err, 'cannot fetch data');
		}
	};

	return (
		<>
			<Button handler={() => fetchCats()}>Fetch Cat</Button>
			<div className={styles.catHolder}>
				{cats.map(cat => (
					<Fragment key={cat.id}>
						<img src={cat.url} alt='' />
						<p>{cat.height}</p>
						<p>{cat.width}</p>
					</Fragment>
				))}
			</div>
		</>
	);
};

export default ImageFetch;
