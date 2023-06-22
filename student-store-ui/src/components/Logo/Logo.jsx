import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo(){
    return (
        <Link to="/">
            <div className="codepathLogo">
                <img src="/Codepath-Logo.png" alt="codepath-logo-icon"/>
            </div>
        </Link>
    )
}