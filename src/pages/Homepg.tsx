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
					<a id="cont" href="https://discord.com/users/740094143379800156">
						<img id="cont" src={DiscordLogo} alt="Discord" />
					</a>
					<p id="p">Reach out to us!</p>
					<a id="cont" href="https://github.com/Lofty-Brambles/restuarant-page">
						<img id="cont" src={GithubLogo} alt="Github" />
					</a>
				</div>
			</div>
		</main>
	);
}
