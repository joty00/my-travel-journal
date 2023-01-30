import logo from '../assets/fill-213.png';

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <h1>my travel journal.</h1>
        </div>
    )
}

export default Navbar;