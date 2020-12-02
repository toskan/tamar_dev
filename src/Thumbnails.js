import React from 'react';
import images from './images';

const Thumbnail = ({ setNailSelect, setNailSelected }) => {
	const onNailClick = (e) => {
		setNailSelect(false);
		setNailSelected(e.target.src);
	};

	return (
		<div className="nail-div">
			{images.map((item, i) => (
				<div
					key={`${item.id}`}
					className="thumbnail-div"
					onClick={onNailClick}
				>
					<img
						className="thumbnail-img"
						src={item.projectImgs[0].url}
						alt="portfolio-thumbnail"
					/>
				</div>
			))}
		</div>
	);
};

export default Thumbnail;
