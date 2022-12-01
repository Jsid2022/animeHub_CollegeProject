import { animeActions } from "../store"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {


    const dispatch = useDispatch();
    const toggler = useSelector(state => state.anime.navbarToggler);
    const type = useSelector(state => state.anime.type);
    const underRated = useSelector(state => state.anime.underRated);
    const setNavbarToggler = () => {
        dispatch(animeActions.setNavToggler(!toggler));
    }
    const setUnderRated = () => {
        dispatch(animeActions.setUnderRated(true));
    }
    console.log(underRated)

    const setAnimeType = (value) => {
        dispatch(animeActions.setSearchQuery(null));
        dispatch(animeActions.setUnderRated(false));
        dispatch(animeActions.setAnimeType(value));
    }

    return (
        <>
            <nav className="py-4 px-3 flex justify-between items-center md:px-4">
                <p className="text-white text-[1.6em] cursor-pointer">Anime Hub</p>
                <ul className="hidden md:flex space-x-6">
                    <li onClick={() => setAnimeType("popular")} className={underRated == true || type != "popular" ? "text-white font-light cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-black bg-[yellow] font-light cursor-pointer px-2 py-1 rounded-[2px]"}><Link to="/">Popular</Link></li>
                    <li onClick={() => setAnimeType("top-airing")} className={underRated == true || type != "top-airing" ? "text-white font-light cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-black bg-[yellow] font-light cursor-pointer px-2 py-1 rounded-[2px]"}><Link to="/">Top Airing</Link></li>
                    <li onClick={() => setAnimeType("recent-release")} className={underRated == true || type != "recent-release" ? "text-white font-light cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-black bg-[yellow] font-light cursor-pointer px-2 py-1 rounded-[2px]"}><Link to="/">
                        Recent Episodes</Link></li>
                    <li onClick={() => setAnimeType("anime-movies")} className={underRated == true || type != "anime-movies" ? "text-white font-light cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-black bg-[yellow] font-light cursor-pointer px-2 py-1 rounded-[2px]"}><Link to="/">Anime Movies</Link></li>
                    <li onClick={setUnderRated} className={!underRated ? "text-white font-light cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-black bg-[yellow] font-light cursor-pointer px-2 py-1 rounded-[2px]"}><Link>Under-Rated Animes</Link></li>
                    {/* <li className="text-white cursor-pointer  bg-[red] px-2 py-1 rounded-[2px] hover:text-[#000]">
                        <button>My WatchList</button>
                    </li> */}
                </ul>
                <button onClick={setNavbarToggler} className="md:hidden bg-[yellow] text-[black] rounded-[2px] py-[1px] px-2"><i className="fa fa-bars"></i></button>
            </nav>
            {toggler && <ul className="py-6 px-4 flex flex-col items-stretch space-y-6 md:hidden">
                <Link to="/"><li onClick={() => setAnimeType("popular")} className={type != "popular" ? "text-center text-white cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-center text-black bg-[yellow] cursor-pointer px-2 py-1 rounded-[2px]"}>Popular</li></Link>
                <Link to="/"><li onClick={() => setAnimeType("top-airing")} className={type != "top-airing" ? "text-center text-white cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-center text-black bg-[yellow] cursor-pointer px-2 py-1 rounded-[2px]"}>Top Airing</li></Link>
                <Link to="/"><li onClick={() => setAnimeType("recent-release")} className={type != "recent-release" ? "text-center text-white cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-center text-black bg-[yellow] cursor-pointer px-2 py-1 rounded-[2px]"}>Recent Episodes</li></Link>
                <Link to="/"><li onClick={() => setAnimeType("anime-movies")} className={type != "anime-movies" ? "text-center text-white cursor-pointer px-2 py-1 rounded-[2px] hover:bg-[yellow] hover:text-[#000]" : "text-center text-black bg-[yellow] cursor-pointer px-2 py-1 rounded-[2px]"}>Anime Movies</li></Link>
            </ul>}
        </>
    )
}

export default Navbar