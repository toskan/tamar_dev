import uuid from 'react-uuid';

const images = [
	{
		id: uuid(),
		linkUrl: 'https://github.com/toskan/ancient-egypt-themed-game',
		repoUrl: 'https://github.com/toskan/ancient-egypt-themed-game',
		projectImgs: [
			{
				url: process.env.PUBLIC_URL + '/egypt_screenshot.mobile.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/egypt_2_screenshot.png',
				orientation: 'landscape',
			},
			{
				url: process.env.PUBLIC_URL + '/egypt_screenshot.png',
				orientation: 'landscape',
			},
		],
	},
	{
		id: uuid(),
		linkUrl: 'https://toskan.github.io/ancient-greece-themed-game/',
		repoUrl: 'https://github.com/toskan/ancient-greece-themed-game',
		projectImgs: [
			{
				url: process.env.PUBLIC_URL + '/greco_screenshot_mobile_2.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/greco_screenshot_mobile.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/greco_screenshot.png',
				orientation: 'landscape',
			},
		],
	},
	{
		id: uuid(),
		linkUrl: 'https://gmapreviews.herokuapp.com/',
		repoUrl: 'https://github.com/toskan/gmapreviews',
		projectImgs: [
			{
				url: process.env.PUBLIC_URL + '/map_api_cell_screenshot_2.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/map_api_cell_screenshot_3.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/mobile_map_api_screenshot.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/map_api_screenshot.png',
				orientation: 'landscape',
			},
			{
				url: process.env.PUBLIC_URL + '/map_api_cell_screenshot.png',
				orientation: 'portrait',
			},
		],
	},
	{
		id: uuid(),
		linkUrl: 'https://newsie-api.herokuapp.com/',
		repoUrl: 'https://github.com/toskan/newsApi',
		projectImgs: [
			{
				url:
					process.env.PUBLIC_URL +
					'/news_api_screenshot_mobile_2.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/news_api_screenshot_mobile.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/news_api_screenshot.png',
				orientation: 'landscape',
			},
		],
	},
	{
		id: uuid(),
		linkUrl: 'https://getweatherapi.herokuapp.com/',
		repoUrl: 'https://github.com/toskan/weatherApi',
		projectImgs: [
			{
				url: process.env.PUBLIC_URL + '/weather_app_screenshot_2.png',
				orientation: 'portrait',
			},
			{
				url: process.env.PUBLIC_URL + '/weather_app_screenshot.png',
				orientation: 'portrait',
			},
		],
	},
];
console.log(images[0].projectImgs);

export default images;
