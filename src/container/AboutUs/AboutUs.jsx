import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
	<div
		className="app__aboutus app__bg flex__center section__padding"
		id="about"
	>
		<div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="g letter" />
		</div>

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={images.spoon} alt="about spoon" className="spoon__img" />
				<p className="p__opensans">
					Dark is a German science fiction thriller co-created by Baran bo Odar
					and Jantje Friese, produced by Netflix. The connections between four
					troubled families in the small town of Winden are revealed when a
					child disappears. They discover a sinister conspiracy that has chased
					them across generations.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>

			<div className="app__aboutus-content_knife flex__center">
				<img src={images.knife} alt="knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">History</h1>
				<img src={images.spoon} alt="about spoon" className="spoon__img" />
				<p className="p__opensans">
					Dark is a German science fiction thriller co-created by Baran bo Odar
					and Jantje Friese, produced by Netflix. The connections between four
					troubled families in the small town of Winden are revealed when a
					child disappears. They discover a sinister conspiracy that has chased
					them across generations.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
