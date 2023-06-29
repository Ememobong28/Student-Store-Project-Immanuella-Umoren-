import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"



export default function Navbar() {

	const handleAboutClick = (e) => {
		const aboutSection = document.getElementById("about");
		if (aboutSection) {
		  aboutSection.scrollIntoView({ behavior: "smooth",
		  block: "start",
		  inline: "nearest", });
		}
	  };

	const handleContactClick = (e) => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
		  contactSection.scrollIntoView({ behavior: "smooth",
		  block: "start",
		  inline: "nearest", });
		}
	  };

	const handleBuynowClick = (e) => {
		const buynowSection = document.getElementById("buynow");
		if (buynowSection) {
		  buynowSection.scrollIntoView({ behavior: "smooth",
		  block: "start",
		  inline: "nearest", });
		}
	  };

  return (
    <nav className="navbar">
      < Logo />
      <div className="nav-socials">
				<a href="https://twitter.com" className="nav-social-link">
					<FaTwitter />
				</a>
				<a href="https://instagram.com" className="nav-social-link">
					<FaInstagram />
				</a>
				<a href="https://facebook.com" className="nav-social-link">
					<FaFacebook />
				</a>
			</div>

      <div className="nav-links">
				<Link to ="/" className="nav-link">
					Home
				</Link>
				<a href ="#about" className="nav-link" onClick={handleAboutClick}>
					About Us
				</a>
				<a href ="#contact" className="nav-link" onClick={handleContactClick}>
					Contact Us
				</a>
				<a href ="#buynow" className="nav-link" onClick={handleBuynowClick}>
					Buy Now
				</a>
			</div>
    </nav>
  )
}
