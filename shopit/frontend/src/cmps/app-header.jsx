import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"

export function AppHeader() {
    return <header className="full main-layout">
        <section className="app-header">
            <p>Shop<span>Top</span></p>
            <nav>
                <NavLink to={'/'}><AiOutlineSearch size={20} /></NavLink>
                <NavLink to={'/'}><AiOutlineUser size={20} /></NavLink>
                <NavLink to={'/cart'}><BsCart size={20} /></NavLink>
            </nav>
        </section>
    </header>
}