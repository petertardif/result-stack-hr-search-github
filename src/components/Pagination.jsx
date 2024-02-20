const Pagination = ({ paginationUrls, fetchPage }) => {
	const buttons = [
		{ action: 'first', label: 'First' },
		{ action: 'prev', label: 'Previous' },
		{ action: 'next', label: 'Next' },
		{ action: 'last', label: 'Last' },
	];
	return (
		<>
			{Object.keys(paginationUrls).length > 0 && (
				<>
					{buttons.map((button, index) => (
						<button
							key={index}
							onClick={() => fetchPage(button.action)}
							disabled={!paginationUrls[button.action]}
							className={`px-3 py-1 mr-2 mt-4 bg-primary text-white rounded-md hover:bg-altprimary focus:outline-none focus:ring-2 focus:ring-lightgrey focus:ring-opacity-50 ${
								paginationUrls[button.action]
									? ''
									: 'opacity-50 cursor-not-allowed'
							}`}
						>
							{button.label}
						</button>
					))}
				</>
			)}
		</>
	);
};

export default Pagination;
