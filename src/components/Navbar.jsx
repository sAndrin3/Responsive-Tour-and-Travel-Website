import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {clicked: false};
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tourer</h1>
                <div className="menu-icons">
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to="/">
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar