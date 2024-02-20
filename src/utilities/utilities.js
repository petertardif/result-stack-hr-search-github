// ParseLinkHeader was constructed using OpenAI's chatGPT for link parsing instead of pulling in additional library. Comments are my own.
const parseLinkHeader = (linkHeader) => {
	// split header Link as it comes back with multiple values
	const links = linkHeader.split(', ');
	// set varible for return links
	const paginationUrls = {};

	// loop through each link
	links.forEach((link) => {
		// use array destructing to split each link
		const [url, rel] = link.split('; ');
		// regex to find url/html values
		const regex = /<([^>]+)>/;
		const urlMatches = url.match(regex);

		// if there is a match, set into  paginationUrls and then return
		if (urlMatches) {
			const [, urlValue] = urlMatches; // destructure urlMatches to get url value, ignore first argument
			const relValue = rel.split('=')[1].replace(/"/g, '');
			paginationUrls[relValue] = urlValue;
		}
	});
	return paginationUrls;
};

const fetchUserAndPaginationData = async (
	url,
	setUserList,
	setPaginationUrls
) => {
	// initial fetch to get first 10 users
	const response = await fetch(url);
	const data = await response.json();

	// fetch additional user data not in first API call for each user
	const userDataPromises = data.items.map(async (item) => {
		const userResponse = await fetch(
			`https://api.github.com/users/${item.login}`
		);
		return userResponse.json();
	});

	// wait for user data promises to resolve
	const userData = await Promise.all(userDataPromises);

	// set user data into state
	setUserList(userData);
	console.log(userData);

	// get link header for pagination
	const linkHeader = response.headers.get('Link');
	if (linkHeader) {
		const nextPaginationUrls = parseLinkHeader(linkHeader);
		setPaginationUrls(nextPaginationUrls);
	}
};

export default fetchUserAndPaginationData;
