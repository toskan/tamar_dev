import React, { useEffect, useRef } from 'react';

const Footer = () => {
	const footerRef = useRef();
	const footerParentRef = useRef();
	useEffect(() => {
		if (window.innerHeight > document.body.offsetHeight) {
			footerParentRef.current.style.paddingTop = `${
				window.innerHeight -
				document.body.offsetHeight -
				footerRef.current.offsetHeight
			}px`;
		} else {
			footerParentRef.current.style.paddingTop = `0px`;
		}
	});
	return (
		<div className="footer-div" ref={footerParentRef}>
			<div className="footer" ref={footerRef}>
				Copyright &copy; Tamar Oskanian
			</div>
		</div>
	);
};

export default Footer;
