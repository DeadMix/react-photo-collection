import React from 'react';

const Tags = ({ pages, categoryId, setCategoryId }) => {
	return (
		<ul className="tags">
			{pages.map((obj, i) => (
				<li
					key={obj.name}
					onClick={() => setCategoryId(i)}
					className={categoryId === i ? 'active' : ''}>
					{obj.name}
				</li>
			))}
		</ul>
	);
};

export default Tags;