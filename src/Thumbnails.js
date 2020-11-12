import React from 'react';
import images from './images';
// import gitLogo from './github-mark-64px.png';

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
					<div className="project-link-div">
						<a href={item.repoUrl}>
							<img
								className="project-link-img"
								alt="Project Link"
								src="https://img-tamar-dev.s3.us-east-2.amazonaws.com/GitHub-Mark-64px.png"
							/>
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Thumbnail;
