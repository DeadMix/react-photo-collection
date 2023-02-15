import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Collection = ({ name, images }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [imageURL, setImageURL] = useState('');

	const onClickImage = (e) => {
		const url = (e.target.src).split('?')[0];
		setImageURL(url)
		setIsOpen(true);
	}

	return (
		<>
			<div className="collection">
				<img onClick={(e) => onClickImage(e)} className="collection__big" src={images[0]} alt="Item" />
				<div className="collection__bottom">
					<img onClick={(e) => onClickImage(e)} className="collection__mini" src={images[1]} alt="Item" />
					<img onClick={(e) => onClickImage(e)} className="collection__mini" src={images[2]} alt="Item" />
					<img onClick={(e) => onClickImage(e)} className="collection__mini" src={images[3]} alt="Item" />
				</div>
				<h4>{name}</h4>
			</div>
			{isOpen && <ImageModal imageURL={imageURL} setIsOpen={setIsOpen} />}
		</>
	);
};

export default Collection;