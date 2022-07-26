import React from "react";
import "./Homepg.scss";

import DiscordLogo from "../assets/discord.webp";
import GithubLogo from "../assets/github.png";

export default function Homepg() {
	return (
		<main>
			<div>
				<div id="space">
					<h1>Hungry? Grab a slice!</h1>
					<button type="button">Click to order!</button>
				</div>
				<div id="left">
					<a href="https://discord.com/users/740094143379800156">
						<img src={DiscordLogo} alt="Discord" />
					</a>
					<p>Reach out to us!</p>
					<a href="https://github.com/Lofty-Brambles/restuarant-page">
						<img src={GithubLogo} alt="Github" />
					</a>
				</div>
			</div>
		</main>
	);
}
