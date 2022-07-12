import React from "react";
import '../styles/components/About.styl'

const About = (props) => {

		const {
				job, phone, address, email, website
		} = props;

		return (
		<>
		<div className="About-title">
			{job}
		</div>
		<div className="About-items">
			<p className="About-item">Phone: {phone}</p>
			<p className="About-item">Email: {email}</p>
			<p className="About-item">Website {website}</p>
			<p className="About-item">Address{address}</p>
			</div>

		</>
		);
};

export default About;