import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Accordion </Link>
                <Link to="/dropdown">Dropdown </Link>
                <Link to="/searchlist">Searchlist </Link>
            </nav>
        </header>
    );
}

export default Header;
