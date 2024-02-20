import { useState } from 'react';
import fetchUserAndPaginationData from '../utilities/utilities';

const SearchBar = ({
	setUserList,
	setPaginationUrls,
	searched,
	setSearched,
}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// do not add useEffect here as it will cause rate limiting with Github API, force user to click search button or press enter from input to search
	// with appropriate backend integration, useEffect should be used to fetch users on every keystroke beyond 3 characters
	const fetchUsersList = async () => {
		setIsLoading(true);
		setUserList([]);
		setError(null);

		try {
			// only fetch users when there are 3 or more characters
			if (searchTerm.length > 2) {
				const encodedSearchTerm = encodeURIComponent(
					`${searchTerm} in:name in:email`
				);
				const url = `https://api.github.com/search/users?q=${encodedSearchTerm}&per_page=10`;
				fetchUserAndPaginationData(url, setUserList, setPaginationUrls);
			} else {
				setUserList([]);
			}
		} catch (error) {
			console.error('Error from fetchUsersList in SearchBar.jsx: ' + error);
			setError(
				'An error occured while fetching users. This is likely an error on the server and not your fault. Please try again later or contact your developer for assistance.'
			);
		}
		setIsLoading(false);
		setSearched(true);
	};

	const handleSearch = async (event) => {
		event.preventDefault();
		await fetchUsersList();
	};

	const clearSearch = (event) => {
		event.preventDefault();
		setUserList([]);
		setSearched(false);
		setSearchTerm('');
	};

	return (
		<>
			<form
				onSubmit={searched ? clearSearch : handleSearch}
				className={`flex justify-center items-center ${
					searched ? 'mt-10' : 'h-screen'
				} `}
			>
				<div className='relative w-2/5'>
					<input
						id='searchbar'
						type='text'
						placeholder='Type name, username or email...'
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
						className='bg-gray-100 border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-smoke focus:ring-opacity-50 w-full'
					/>
					<button
						type='submit'
						className='absolute right-0 top-0 bottom-0  px-3 py-2 bg-primary hover:bg-altprimary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-smoke focus:ring-opacity-50'
					>
						{searched ? 'Clear' : 'Search'}
					</button>
				</div>
			</form>
			{isLoading && (
				<p className='text-center mt-4 text-gray-500'>Loading...</p>
			)}
			{error && <p className='text-center text-red-500 mt-4'>{error}</p>}
		</>
	);
};

export default SearchBar;
