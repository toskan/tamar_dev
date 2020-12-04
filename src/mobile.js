const mobile = {
	portrait:
		window.matchMedia('(max-width: 414px)').matches &&
		window.matchMedia('(orientation: portrait)').matches,
	landscape:
		window.matchMedia('(max-width: 823px)').matches &&
		window.matchMedia('(orientation: landscape)').matches,
	eitherOr:
		(window.matchMedia('(max-width: 414px)').matches &&
			window.matchMedia('(orientation: portrait)').matches) ||
		(window.matchMedia('(max-width: 823px)').matches &&
			window.matchMedia('(orientation: landscape)').matches),
};

export default mobile;
