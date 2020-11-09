import React from 'react';
import images from './images';

const Thumbnail = (props) => {
	// const [height, setHeight] = useState(null);
	// useEffect(() => {
	// 	const headerHeight = document.getElementById('menu-header-div')
	// 		.offsetHeight;
	// 	setHeight(window.innerHeight - headerHeight);
	// 	console.log(height);
	// }, [height]);

	const onNailClick = (e) => {
		props.setNailSelect(false);
		props.setNailSelected(e.target.src);
		console.log(e);
		console.log(e.target.src);
		console.log(e.currentTarget);
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
					/>
					<div>
						<a href={item.repoUrl}>
							<img
								className="project-link"
								alt="Project Link"
								src={
									process.env.PUBLIC_URL +
									'/gitHub-mark-64px.png'
								}
							/>
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Thumbnail;
