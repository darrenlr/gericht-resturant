import React, { useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const [videoClass, setVideoClass] = useState(
		"app__video-overlay flex__center"
	);
	const vidRef = React.useRef();

	const handleVideo = () => {
		setPlayVideo((prevPlayVideo) => !prevPlayVideo);

		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};

	return (
		<div
			className="app__video"
			onMouseEnter={() => setVideoClass("app__video-overlay flex__center")}
			onMouseLeave={() => setVideoClass("")}
		>
			<video
				src={meal}
				type="video/mp4"
				ref={vidRef}
				loop
				controls={false}
				muted
			/>
			<div className={videoClass}>
				<div
					className="app__video-overlay_circle flex__center"
					onClick={handleVideo}
				>
					{playVideo ? (
						<BsFillPauseFill color="#fff" fontSize={30} />
					) : (
						<BsFillPlayFill color="#fff" fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
