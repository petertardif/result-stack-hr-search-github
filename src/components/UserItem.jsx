import TweetButton from './TweetButton';

export default function UserItem({ user }) {
	return (
		<>
			<tr className='w-85 mx-auto bg-white shadow-md rounded-lg p-6 border-b border-gray-300 mb-4 hover:bg-beige'>
				<td className='px-4 py-2 flex items-center'>
					<img
						src={user.avatar_url}
						alt={user.login}
						className='w-10 h-10 rounded-full mr-3'
					/>
					<a
						href={user.html_url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-primary-500 hover:text-primary no-underline'
					>
						{user.name}
					</a>
				</td>
				<td className=' px-4 py-2 '>{user.login}</td>
				<td className=' px-4 py-2 '>
					<div>{user.email ? user.email : 'N/A'}</div>

					<div>
						<TweetButton twitter_username={user.twitter_username} />
					</div>
				</td>
				<td className='px-4 py-2 '>{user.location}</td>
				<td className='px-4 py-2 '>{user.public_repos}</td>
				<td className='px-4 py-2 '>{user.created_at.slice(0, 10)}</td>
				<td className='px-4 py-2 '>{user.updated_at.slice(0, 10)}</td>
			</tr>
		</>
	);
}
