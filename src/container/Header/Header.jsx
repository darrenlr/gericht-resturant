import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading title="Chase the new flavour" />
			<h1 className="app__header-h1">The Key to Fine Dining</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Sic Mundus was founded in the 19th century by Heinrich Tannhaus, who
				wished to find a way to bring his dead wife, Charlotte, back to life.[1]
				By 1888, Heinrich's son, Gustav, was the only remaining member until the
				Stranger, Franziska Doppler, Magnus Nielsen, and Bartosz Tiedemann
				appeared, having traveled back in time just as the apocalypse happened
				in 2020.
			</p>
			<button type="button" className="custom__button">
				Explore Menu
			</button>
		</div>

		<div className="app__wrapper_img">
			<img src={images.welcome} alt="header img" />
		</div>
	</div>
);

export default Header;
