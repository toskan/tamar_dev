import React from 'react';
import { AiOutlineFullscreen, AiFillHtml5 } from 'react-icons/ai';
import { SiRedux, SiNodeDotJs } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1, DiReact, DiJqueryLogo } from 'react-icons/di';

const Skills = () => {
	return (
		<div className="skills-div">
			<ul className="skills-list">
				<li>
					<span className="icon-span">
						<DiJavascript1 />
					</span>
					<span className="skill-span">{` `}JS</span>
				</li>
				<li>
					<span className="icon-span">
						<DiJqueryLogo />
					</span>
					<span className="skill-span">{` `}jQuery</span>
				</li>
				<li>
					<span className="icon-span">
						<DiReact />
					</span>
					<span className="skill-span">{` `}React</span>
				</li>
				<li>
					<span className="icon-span">
						<SiRedux />
					</span>
					<span className="skill-span">{` `}Redux</span>
				</li>
				<li>
					<span className="icon-span">
						<SiNodeDotJs />
					</span>
					<span className="skill-span">{` `}Node.js</span>
				</li>
				<li>
					<span className="icon-span">
						<FaCss3Alt />
					</span>
					<span className="skill-span">{` `}CSS</span>
				</li>
				<li>
					<span className="icon-span">
						<AiOutlineFullscreen />
					</span>
					<span className="skill-span">{` `}RWD</span>
				</li>
				<li>
					<span className="icon-span">
						<AiFillHtml5 />
					</span>
					<span className="skill-span">{` `}HTML</span>
				</li>
			</ul>
		</div>
	);
};

export default Skills;
