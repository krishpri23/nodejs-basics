import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                {/* /host is the shared as parent and dashboard page so this page is set active even after switching to other link. using end will resolve this issue */}
                <NavLink
                    to="/host"
                    end
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