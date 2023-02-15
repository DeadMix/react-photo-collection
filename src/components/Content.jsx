import React from 'react';
import { PhotoLoader } from '../PhotoLoader';
import Collection from './Collection';

const Content = ({ isLoading, collections, searchValue }) => {
	return (
		<div className="content">
			{isLoading ? (
				<>
					<PhotoLoader />
					<PhotoLoader />
					<PhotoLoader />
				</>
			) : (
				collections
					.filter(obj => (obj.name.toLowerCase().includes(searchValue.toLowerCase())) ? true : false)
					.map((obj, index) => <Collection key={index} name={obj.name} images={obj.photos} />)
			)}
		</div>
	);
};

export default Content;