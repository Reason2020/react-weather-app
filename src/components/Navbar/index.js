import "./Navbar.css";
import SearchBar from "../SearchBar";

const Navbar = ({ setCity }) => (
    <nav>
        <div className="logo">
            <h2>WeatherApp</h2>
        </div>
        <SearchBar setCity={setCity} />
    </nav>
)

export default Navbar;