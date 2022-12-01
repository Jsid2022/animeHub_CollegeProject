import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AnimeInfo = () => {

  const animeId = useSelector(state => state.anime.animeId);
  const [data, setData] = useState();

  const fetchAnimeIdData = async () => {
    const res = await fetch(`https://gogoanime.consumet.org/anime-details/${animeId}`);
    const resData = await res.json();
    setData(resData);
  }

  const generateGenres = (value) => {
    return <p key={value} className="bg-[yellow] text-xs px-4 text-center rounded-full font-bold">{value}</p>
  }

  const generateEpisodesButton = (value, url) => {
    return <a href={url} key={value} target="__blank" className="bg-[yellow] py-2 tracking-wider font-bold hover:bg-[#b9e2f7] rounded-sm text-center" type="button">{value}</a>
  }

  useEffect(() => {
    if (animeId) {
      fetchAnimeIdData();
    }
  }, [])

  return (
    <>
      {!animeId ? <div>
        <p className="mt-4 text-2xl text-white text-center">Anime Not Found!!</p>
      </div> : !data ? <p className="text-[yellow] text-center text-xl">Loading...</p> :
        <>
          <div className="w-[95%] mx-auto flex flex-col items-center space-y-4 mt-4 md:space-x-4 md:flex-row md:justify-between md:space-y-0">
            <div className="flex-1/2">
              <img src={data.animeImg} className="max-h-[400px] md:w-full " />
            </div>
            <div className="flex-1 flex flex-col">
              <div>
                <p className="text-xl text-[yellow] font-bold">{data.animeTitle} ({data.type})</p>
                {data.otherNames && <p className="text-md text-[yellow]">{data.otherNames}</p>}
              </div>
              <div className="hidden md:flex space-x-3 items-center mt-2">
                {data.genres.map(genre => generateGenres(genre))}
              </div>
              <p className="text-white mt-4 font-light tracking-widest">
                Released: {data.releasedDate}
              </p>
              <p className="text-white mt-2 font-light tracking-widest">
                Status: {data.status}
              </p>
              <p className="text-white mt-2 font-light tracking-widest">
                Total Episodes: {data.totalEpisodes}
              </p>

              {data.synopsis && <div className="mt-2">
                <p className="text-[yellow] tracking-wider">Synopsis</p>
                <p className="text-justify text-white mt-1 tracking-wider">{data.synopsis}</p>
              </div>}
            </div>
          </div>
          {data.episodesList.length > 0 && <div className="w-[95%] py-4 mx-auto">
            <p className="text-white text-2xl">Episodes</p>
            <div className="gap-y-4 grid md:grid-cols-3 md:gap-4 mt-4">
              {data.episodesList.map(episode => generateEpisodesButton(episode.episodeId, episode.episodeUrl))}
            </div>
          </div>}
        </>
      }
    </>
  )
}

export default AnimeInfo