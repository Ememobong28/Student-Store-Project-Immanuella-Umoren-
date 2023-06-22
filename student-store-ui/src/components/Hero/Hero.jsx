import React from "react";
import "./Hero.css";

export default function Hero() {
	return (
		<nav className="hero">
			<div className="hero-container">
				<div className="hero-intro">
					Welcome!
					<br />
					Find Your Merch!
				</div>
				<p className="hero-description">
					We have all kinds of goodies. Click on any of the items to
					start filling up your shopping cart. Checkout whenever
					you're ready.
				</p>
			</div>
			<img className="hero-image" src="/House Logo.png" alt="logo" />
		</nav>
	)
}