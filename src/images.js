import uuid from 'react-uuid';

const images = [
	{
		id: uuid(),
		linkUrl: 'https://github.com/toskan/ancient-egypt-themed-game',
		repoUrl: 'https://github.com/toskan/ancient-egypt-themed-game',
		projectImgs: [
			{
				url:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/egypt_screenshot.mobile.png',
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/egypt_2_landscape.mp4',
				orientation: 'landscape',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/egypt_3_landscape.mp4',
				orientation: 'landscape',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/egypt_1_portrait.mp4',
				orientation: 'portrait',
			},
		],
	},
	{
		id: uuid(),
		linkUrl: 'https://getweatherapi.herokuapp.com/',
		repoUrl: 'https://github.com/toskan/weatherApi',
		projectImgs: [
			{
				url:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/weather_app_screenshot.png',
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/weather_1_portrait.mp4',
				orientation: 'portrait',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/weather_2_portrait.mp4',
				orientation: 'portrait',
			},
		],
	},
	{
		id: uuid(),
		linkUrl: 'https://gmapreviews.herokuapp.com/',
		repoUrl: 'https://github.com/toskan/gmapreviews',
		projectImgs: [
			{
				url:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/map_api_cell_screenshot_2.png',
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/map_1_portrait.mp4',
				orientation: 'portrait',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/map_1_landscape.mp4',
				orientation: 'landscape',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/map_2_portrait.mp4',
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
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/news_api_screenshot_mobile_2.png',
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/news_1_landscape.mp4',
				orientation: 'landscape',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/news_2_landscape.mp4',
				orientation: 'landscape',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/news_2_portrait.mp4',
				orientation: 'portrait',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/news_1_portrait.mp4',
				orientation: 'portrait',
			},
		],
	},
	{
		id: uuid(),
		linkUrl: 'https://toskan.github.io/ancient-greece-themed-game/',
		repoUrl: 'https://github.com/toskan/ancient-greece-themed-game',
		projectImgs: [
			{
				url:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/greco_screenshot_mobile_2.png',
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/greco_1_porrait.mp4',
				orientation: 'portrait',
			},
			{
				video:
					'https://img-tamar-dev.s3.us-east-2.amazonaws.com/greco_2_portrait.mp4',
				orientation: 'portrait',
			},
		],
	},
];

export default images;
