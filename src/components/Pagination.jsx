import React from 'react';

const Pagination = ({ page, setPage }) => {
	return (
		<ul className="pagination">
			{[...Array(5)].map((_, i) => (
				<li
					key={i}
					onClick={() => setPage(i + 1)}
					className={page === i + 1 ? 'active' : ''}>
					{i + 1}
				</li>
			))}
		</ul>
	);
};

export default Pagination;