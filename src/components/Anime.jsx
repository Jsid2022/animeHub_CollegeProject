import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { animeActions } from "../store/index";

const Anime = ({ data }) => {

    const dispatch = useDispatch();

    const setAnimeId = (animeId) => {
        dispatch(animeActions.setAnimeId(animeId));
    }

    return (   
        data.animeImg && <div className="flex flex-col rounded-[1px] px-4 space-y-2 justify-center items-center py-6">
            <img className="rounded-sm w-[80%] md:w-full md:h-[450px]" src={data.animeImg} />
            <div>
                <h2 className="text-white text-center text-lg font-normal">{data.animeTitle}</h2>
                <p className="text-white text-center text-[yellow] font-bold italic">{data.releasedDate}</p>
            </div>
            <Link to={`/${data.animeId}`} onClick={() => setAnimeId(data.animeId)} className="text-black bg-white py-1 px-4 rounded-[2px] font-bold focus:outline-none hover:bg-[yellow] gover:text-[black]">Info</Link>
        </div>
    )
}

export default Anime