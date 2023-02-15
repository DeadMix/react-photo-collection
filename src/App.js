import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Pagination from './components/Pagination';
import Tags from './components/Tags';
import './index.scss';

const pages = [
	{ "name": "All" },
	{ "name": "Sea" },
	{ "name": "Mountains" },
	{ "name": "Architecture" },
	{ "name": "Landscape" },
	{ "name": "Cities" }
]

function App() {
	const [categoryId, setCategoryId] = useState(0);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		const category = categoryId ? `category=${categoryId}` : '';
		setIsLoading(true);

		fetch(category
			? `https://63ec7e42be929df00cac213c.mockapi.io/photos?page=${page}&limit=3&${category}`
			: `https://63ec7e42be929df00cac213c.mockapi.io/photos?page=${page}&${category}`)
			.then(res => res.json())
			.then(json => setCollections(json))
			.catch(err => {
				console.log(err)
				alert("Fetch collection error! Check log");
			}).finally(() => setIsLoading(false));
	}, [categoryId, page]);

	return (
		<div className="App">
			<h1>Photo collection</h1>
			<div className="top">
				<Tags pages={pages} categoryId={categoryId} setCategoryId={setCategoryId} />
				<input
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					className="search-input"
					placeholder="Search by name..." />
			</div>
			<Content isLoading={isLoading} collections={collections} searchValue={searchValue} />
			{categoryId ? <Pagination page={page} setPage={setPage} /> : null}
		</div>
	);
}

export default App;
