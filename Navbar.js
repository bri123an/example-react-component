import './Navbar.css'

function Navbar() {
    return (
        <nav className="nav flex-column bg-primary col-2 full-height-navbar">
            <a className="btn btn-primary navbar-btn" href="#">My Recipes</a>
            <a className="btn btn-primary navbar-btn" href="#">Shopping List</a>
        </nav>
    );
}

export default Navbar;