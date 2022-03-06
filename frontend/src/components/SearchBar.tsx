import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { AppProps } from '../AppProps';

interface Props {
	filteredList: AppProps['arrayOfVideos'];
	handleFilter: AppProps['handleFilter'];
	handleSearch: AppProps['handleSearch'];
}

const SearchBar: React.FC<Props> = ({
	handleFilter,	filteredList,	handleSearch
}) => {
	return (
		<div className="search-bar">
			<div className="search-bar__input">
				<input
					type="text"
					className="search-bar__input-field"
					placeholder='Search a video'
					aria-label="Search a video"
					onChange={handleFilter}
				/>
				<button className="search-button" type="button" title='search-button'>
					<BiSearchAlt />
				</button>
			</div>
			{filteredList.length !== 0 && (
				<div className="drop-down__list">
					{filteredList.slice(0, 5).map((video) => (
						<button
							key={video?.id?.videoId}
							className="drop-down__btn-video"
							onClick={() => handleSearch(video.id?.videoId, video)}
						>
							{video?.id?.name}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
