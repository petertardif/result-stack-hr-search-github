import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const TweetButton = ({ twitter_username }) => {
	const tweetText = encodeURIComponent(
		'The HR Team at Result Stack would love to discuss an open position. Send us a direct message if you are interested.'
	);

	return (
		twitter_username && (
			<a
				href={`https://twitter.com/intent/tweet?text=${tweetText}@${twitter_username}`}
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon
					icon={faSquareXTwitter}
					className='hover:text-red-600'
				/>
			</a>
		)
	);
};

export default TweetButton;
