import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Header from './components/Header';

function App() {
	const [userList, setUserList] = useState([]);
	const [paginationUrls, setPaginationUrls] = useState({});
	const [searched, setSearched] = useState(false);

	return (
		<div className='text-center'>
			<Header />
			<SearchBar
				setUserList={setUserList}
				setPaginationUrls={setPaginationUrls}
				searched={searched}
				setSearched={setSearched}
			/>
			<UserList
				userList={userList}
				setUserList={setUserList}
				paginationUrls={paginationUrls}
				setPaginationUrls={setPaginationUrls}
				searched={searched}
			/>
		</div>
	);
}

export default App;
