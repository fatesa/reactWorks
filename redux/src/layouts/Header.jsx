import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/counter">Counter</NavLink>
                <NavLink to="/bank">Banking</NavLink>
            </nav>
        </div>
    )
}
export default Header