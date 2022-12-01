import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Anime from "./Anime";
import QuoteDiv from "./QuoteDiv";
import Search from "./Search";

const MainDiv = () => {

  const type = useSelector(state => state.anime.type);
  const searchQuery = useSelector(state => state.anime.searchQuery);
  const underRated = useSelector(state => state.anime.underRated);
  const [data, setData] = useState()

  const fetchAnimeData = async (type) => {
    console.log("test")
    setData(null);
    const res = await fetch(`https://gogoanime.consumet.org/${type}`);
    const data = await res.json();
    if (!localStorage.getItem("animeData")) {
      localStorage.setItem("animeData", JSON.stringify(data));
    }

    setData(data);
  }

  const fetchSearchAnimeData = async () => {
    const res = await fetch(`https://gogoanime.consumet.org/search?keyw=${searchQuery}`);
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    if (!localStorage.getItem("animeData")) {
      type && fetchAnimeData(type);
    } else {
      setData(JSON.parse(localStorage.getItem("animeData")));
    }
  }, [])

  useEffect(() => {
    if (type == "popular") {
      setData(JSON.parse(localStorage.getItem("animeData")));
    } else {
      fetchAnimeData(type);
    }
  }, [type])

  useEffect(() => {
    if (searchQuery != null) {
      fetchSearchAnimeData();
    } else {
      if (type != "popular") {
        fetchAnimeData(type);
      } else {
        setData(JSON.parse(localStorage.getItem("animeData")));
      }
    }
  }, [searchQuery])

  return (
    <div className="mt-4 w-[95%] mx-auto py-4">
      {/* <QuoteDiv /> */}
      <h1 className="text-white text-[1.4em] font-normal text-center md:text-left">
        {!underRated? type == "popular" ? "Popular Animes" : type == "recent-release" ? "Recent Episodes" : type == "top-airing" ? "Top-Airing Animes" : type == "anime-movies" && "Anime Movies" : "Under-Rated Animes"}
      </h1>
      {!underRated && <Search />}
      {!underRated ? data ? <div className="mt-2 py-4 grid gap-y-8 md:gap-x-8 md:grid-cols-3">
        {data.map(anime => <Anime key={anime.animeId} data={anime} />)}
      </div> : <p className="text-sm mt-10 text-[yellow] font-bold text-center">Loading...</p> : <p>OK</p>}
    </div>
  )
}

export default MainDiv