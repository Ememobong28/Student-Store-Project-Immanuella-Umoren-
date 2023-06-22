import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"



export default function Navbar() {
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
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/about" className="nav-link">
					About Us
				</Link>
				<Link to="/contact" className="nav-link">
					Contact Us
				</Link>
				<Link to="/contact" className="nav-link">
					Buy Now
				</Link>
			</div>
    </nav>
  )
}
