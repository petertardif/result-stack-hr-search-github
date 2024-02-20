import UserItem from './UserItem';
import fetchUserAndPaginationData from '../utilities/utilities';
import Pagination from './Pagination';

export default function UserList({
	userList,
	setUserList,
	paginationUrls,
	setPaginationUrls,
	searched,
}) {
	const fetchPage = async (pageAction) => {
		const url = paginationUrls[pageAction];
		if (url) {
			try {
				fetchUserAndPaginationData(url, setUserList, setPaginationUrls);
			} catch (error) {
				console.error('Error from fetchPage in UserList.js: ' + error);
			}
		}
	};
	return (
		<>
			{userList.length > 0 && (
				<div className='w-85 mx-auto bg-white shadow-md rounded-lg p-6'>
					<table className='w-full'>
						<thead>
							<tr className='w-85 mx-auto bg-white shadow-md rounded-lg p-6 border-b border-gray-300 mb-4'>
								<th className='px-4 py-2 font-semibold'>Name</th>
								<th className='px-4 py-2 font-semibold'>Login</th>
								<th className='px-4 py-2 font-semibold'>Email/Twitter</th>
								<th className='px-4 py-2 font-semibold'>Location</th>
								<th className='px-4 py-2 font-semibold'>Public Repos</th>
								<th className='px-4 py-2 font-semibold'>Created On</th>
								<th className='px-4 py-2 font-semibold'>Last Updated</th>
							</tr>
						</thead>
						<tbody>
							{userList &&
								userList.map((user) => <UserItem key={user.id} user={user} />)}
						</tbody>
					</table>
					<Pagination paginationUrls={paginationUrls} fetchPage={fetchPage} />
				</div>
			)}
			{userList.length === 0 && searched && (
				<p>No results. Please search again</p>
			)}
		</>
	);
}
