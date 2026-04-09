import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <nav>
                <NavLink to='/bank'>BankReducer</NavLink>            
                <NavLink to='/count'>CountReducer</NavLink>
                <NavLink to='/theme'>ParentTheme</NavLink>
            </nav>
        </div>
    )
}

export default Header