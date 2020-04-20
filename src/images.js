import uuid from 'react-uuid';

const images = [
	{
		id: uuid(),
		linkUrl: 'https://github.com/toskan/ancient-egypt-themed-game',
		repoUrl: 'https://github.com/toskan/ancient-egypt-themed-game',
		projectImgs: [
			{
				url: 'tamar_dev/egypt_screenshot.mobile.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/egypt_2_screenshot.png',
				orientation: 'landscape',
			},
			{
				url: 'tamar_dev/egypt_screenshot.png',
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
				url: 'tamar_dev/greco_screenshot_mobile_2.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/greco_screenshot_mobile.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/greco_screenshot.png',
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
				url: 'tamar_dev/map_api_cell_screenshot_2.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/map_api_cell_screenshot_3.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/mobile_map_api_screenshot.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/map_api_screenshot.png',
				orientation: 'landscape',
			},
			{
				url: 'tamar_dev/map_api_cell_screenshot.png',
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
				url: 'tamar_dev/news_api_screenshot_mobile_2.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/news_api_screenshot_mobile.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/news_api_screenshot.png',
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
				url: 'tamar_dev/weather_app_screenshot_2.png',
				orientation: 'portrait',
			},
			{
				url: 'tamar_dev/weather_app_screenshot.png',
				orientation: 'portrait',
			},
		],
	},
];

export default images;
