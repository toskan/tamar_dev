import React from 'react';
import Slider from 'react-slick';

class ImageHover extends React.Component {
	render() {
		const { images } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			speed: 5000000000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		let imagesGrid = images.map((item, i) => (
			<div className="image-container" key={`${item}${i}`}>
				<img
					alt="project-screenshot"
					className="grid-img"
					src={item.projectImgs[0].url}
					id={`${item.id}`}
				/>
			</div>
		));
		// const [activeProject, setActiveProject] = useState(null);
		//getSlideObject(id) (see work.js) will get the object with all the necessary items for the current slide-show based on UUID value (line 14 work.js)
		return <Slider {...settings}>{[imagesGrid]}</Slider>;
	}
}

export default ImageHover;
