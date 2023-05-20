import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`, { replace: true });
        setSearch("");
    };

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> RatãoFlix
                </Link>
            </h2>
            <h2>
                <Link to="/like/movies">
                    <AiFillLike /> Gostei
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Busque um filme"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;