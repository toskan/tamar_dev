import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';

function Welcome() {
	return (
		<div className="welcome-div">
			<div className="p-intro">
				<div className="bio-div">
					<div className="paragraph-div">
						<div className="bio-paragraphs">
							<p className="paragraph-bio">
								<span className="hell">
									HELL
									<span className="circle-span">
										<span className="circle-2"></span>
									</span>
								</span>
							</p>
							<br />
							<br />
							<p className="paragraph-bio">
								I'm Tamar, a Front End Web Developer, based in
								NY. My programming journey started at General
								Assembly where I discovered a love for coding. I
								first completed a Front End Web Development
								course there and went on to take two other
								courses: Javascript and React.
							</p>
							<br />
							<p className="paragraph-bio">
								I built this site in React. My other projects
								are written in Javascript as well, using jQuery.
								As a problem solver, making something work makes
								me happy. And creating something new in the
								process is a welcome perk.
							</p>
							<br />
							<p className="paragraph-bio">
								Check out my{' '}
								<Link
									to="/portfolio"
									className="portfolio-text-link"
								>
									portfolio
								</Link>{' '}
								and {` `}
								<a
									href="https://github.com/toskan"
									rel="noopener noreferrer"
									target="_blank"
									className="portfolio-text-link"
								>
									GitHub
								</a>
								{` `}page.
							</p>
							<br />
							<p className="paragraph-bio">
								<Link
									to="/contact"
									className="portfolio-text-link"
								>
									Get in touch
								</Link>
								{` `}
								if you like what you see.
							</p>
						</div>
					</div>
					<br />
					<br />
					<Skills />
				</div>
			</div>
		</div>
	);
}

export default Welcome;
