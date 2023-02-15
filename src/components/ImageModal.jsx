import React from 'react';

const ImageModal = ({ imageURL, setIsOpen }) => {
	const onClickModal = (e) => {
		if (e.target.closest('.image-viewer')) return;
		setIsOpen(false);
	}

	return (
		<div onClick={(e) => onClickModal(e)} className="image-viewer-wrapper">
			<div className='image-viewer'>
				<img className="image-viewer__img" src={imageURL} alt="Item" />
			</div>
		</div>
	);
};

export default ImageModal;