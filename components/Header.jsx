import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink
                    to="/host"
                    className={({ isActive }) =>
                        isActive ? 'active-header' : null
                    }
                >Host</NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'active-header' : null
                    }
                >About</NavLink>
                <NavLink
                    to="/vans"
                    className={({ isActive }) =>
                        isActive ? 'active-header' : null
                    }
                >Vans</NavLink>
            </nav>
        </header>
    )
}